type Theme = 'default' | 'green' | 'pink' | 'purple' | 'brown';

export interface RootStateProps {
  settingModule: SettingStateProps
}

export interface SettingStateProps {
  theme: Theme
}
