import { WeuiFooterPreviewComponent, WeuiFooterDefault } from './weui-footer-preview/weui-footer-preview';
import { WeuiFooterSettingComponent } from './weui-footer-setting/weui-footer-setting';

export const both = {
    'weui-footer': {
        setting: WeuiFooterSettingComponent,
        view: WeuiFooterPreviewComponent,
        default: WeuiFooterDefault
    }
};

export const preview = {
    'weui-footer': WeuiFooterPreviewComponent
};

export const entrys = [
    WeuiFooterSettingComponent,
    WeuiFooterPreviewComponent
];

export { WeuiFooterDefault } from './weui-footer-preview/weui-footer-preview';
