import {
    Component, KeyValueDiffers,
    ElementRef, Renderer2, HostListener
} from '@angular/core';
import { ReactComponent } from 'ng-react-component';
export interface WeuiFooterProps { }
export class WeuiFooterDefault { }
@Component({
    selector: 'weui-footer-preview',
    templateUrl: './weui-footer-preview.html',
    styleUrls: ['./weui-footer-preview.scss']
})
export class WeuiFooterPreviewComponent extends ReactComponent<any, any> {
    constructor(
        _differs: KeyValueDiffers,
        _ele: ElementRef,
        _render: Renderer2
    ) {
        super(_differs, _ele, _render);
    }

    onPropsChange() { }

    onStateChange() {
        console.log(this.state);
    }
}
