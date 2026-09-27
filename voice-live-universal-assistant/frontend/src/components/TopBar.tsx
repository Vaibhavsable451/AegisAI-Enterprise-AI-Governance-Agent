import React from 'react';
import { Button, Text } from '@fluentui/react-components';
import { Menu, MenuTrigger, MenuPopover, MenuList, MenuItem } from '@fluentui/react-components';
import {
  MoreHorizontalRegular,
  Settings24Regular,
  TextAlignLeftRegular,
  ShieldRegular,
  PersonFeedbackRegular,
  ChatAddRegular,
  Open16Regular,
  Mic24Regular,
  Chat24Regular,
  BotRegular,
} from '@fluentui/react-icons';
import type { InputMode } from '../hooks/useUrlParams';
import type { VoiceSettings } from '../types';

interface TopBarProps {
  agentName: string;
  onNewThread: () => void;
  onOpenSettings: () => void;
  showControls: boolean;
  inputMode: InputMode;
  onInputModeChange?: (mode: InputMode) => void;
  showInputModeToggle?: boolean;
  connectionMode: VoiceSettings['mode'];
  onConnectionModeChange?: (mode: VoiceSettings['mode']) => void;
  showConnectionModeToggle?: boolean;
}

export const TopBar: React.FC<TopBarProps> = ({
  agentName,
  onNewThread,
  onOpenSettings,
  showControls,
  inputMode,
  onInputModeChange,
  showInputModeToggle = false,
  connectionMode,
  onConnectionModeChange,
  showConnectionModeToggle = false,
}) => {
  return (
    <div style={barStyle}>
      <div style={leftSectionStyle}>
        <Text as="h1" weight="semibold" size={300} style={agentNameStyle}>
          {agentName || 'Voice Assistant'}
        </Text>
      </div>

      {showControls && (
        <div style={rightStyle}>
          {showConnectionModeToggle && onConnectionModeChange && (
            <div style={segmentStyle} role="group" aria-label="Connection mode">
              <Button
                appearance={connectionMode === 'model' ? 'primary' : 'subtle'}
                size="small"
                onClick={() => onConnectionModeChange('model')}
              >
                Model
              </Button>
              <Button
                appearance={connectionMode === 'agent' ? 'primary' : 'subtle'}
                size="small"
                icon={<BotRegular />}
                onClick={() => onConnectionModeChange('agent')}
              >
                Agent
              </Button>
            </div>
          )}

          {showInputModeToggle && onInputModeChange && (
            <div style={segmentStyle} role="group" aria-label="Input mode">
              <Button
                appearance={inputMode === 'voice' ? 'primary' : 'subtle'}
                size="small"
                icon={<Mic24Regular />}
                onClick={() => onInputModeChange('voice')}
              >
                Voice
              </Button>
              <Button
                appearance={inputMode === 'text' ? 'primary' : 'subtle'}
                size="small"
                icon={<Chat24Regular />}
                onClick={() => onInputModeChange('text')}
              >
                Chat
              </Button>
            </div>
          )}

          <Button appearance="subtle" icon={<ChatAddRegular />} onClick={onNewThread}>
            New chat
          </Button>

          <Menu>
            <MenuTrigger disableButtonEnhancement>
              <Button appearance="subtle" shape="circular" icon={<MoreHorizontalRegular />} aria-label="More options" />
            </MenuTrigger>
            <MenuPopover>
              <MenuList>
                <MenuItem icon={<Settings24Regular />} onClick={() => onOpenSettings()}>Settings</MenuItem>
                <MenuItem icon={<TextAlignLeftRegular />} onClick={() => window.open('https://aka.ms/aistudio/terms', '_blank')}>Terms of use <Open16Regular style={{ marginLeft: '4px', opacity: 0.6 }} /></MenuItem>
                <MenuItem icon={<ShieldRegular />} onClick={() => window.open('https://go.microsoft.com/fwlink/?linkid=521839', '_blank')}>Privacy <Open16Regular style={{ marginLeft: '4px', opacity: 0.6 }} /></MenuItem>
                <MenuItem icon={<PersonFeedbackRegular />}>Send feedback</MenuItem>
              </MenuList>
            </MenuPopover>
          </Menu>
        </div>
      )}
    </div>
  );
};

const barStyle: React.CSSProperties = {
  display: 'flex',
  flexShrink: 0,
  alignItems: 'center',
  justifyContent: 'space-between',
  boxSizing: 'border-box',
  width: '100%',
  maxWidth: '100%',
  padding: '12px 16px',
  gap: '12px',
};

const leftSectionStyle: React.CSSProperties = {
  overflow: 'hidden',
  display: 'flex',
  flex: '1 1 120px',
  gap: '12px',
  alignItems: 'center',
  minWidth: 0,
};

const agentNameStyle: React.CSSProperties = {
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  margin: 0,
};

const rightStyle: React.CSSProperties = {
  display: 'flex',
  flexShrink: 0,
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'flex-end',
  gap: '8px',
};

const segmentStyle: React.CSSProperties = {
  display: 'flex',
  gap: '4px',
  padding: '2px',
  borderRadius: '8px',
  background: 'var(--colorNeutralBackground3, #f0f0f0)',
};
