import * as import0 from '../../../app/store/checkout.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/model/order.repository';
import * as import9 from '../../../app/model/order.model';
import * as import10 from './checkout.component.css.shim.ngstyle';
import * as import11 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import12 from '@angular/core/src/linker/view_container';
import * as import13 from '@angular/router/src/router';
import * as import14 from '@angular/router/src/router_state';
import * as import15 from '@angular/router/src/directives/router_link';
import * as import16 from '../../node_modules/@angular/forms/src/directives/ng_form.ngfactory';
import * as import17 from '../../node_modules/@angular/forms/src/directives/ng_control_status.ngfactory';
import * as import18 from '../../node_modules/@angular/forms/src/directives/default_value_accessor.ngfactory';
import * as import19 from '../../node_modules/@angular/forms/src/directives/validators.ngfactory';
import * as import20 from '../../node_modules/@angular/forms/src/directives/ng_model.ngfactory';
import * as import21 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import22 from '@angular/core/src/linker/element_ref';
import * as import23 from '@angular/core/src/linker/template_ref';
import * as import24 from '@angular/forms/src/directives/default_value_accessor';
import * as import25 from '@angular/forms/src/directives/validators';
import * as import26 from '@angular/forms/src/validators';
import * as import27 from '@angular/forms/src/directives/control_value_accessor';
import * as import28 from '@angular/forms/src/directives/ng_model';
import * as import29 from '@angular/forms/src/directives/ng_control';
import * as import30 from '@angular/forms/src/directives/ng_control_status';
import * as import31 from '@angular/common/src/directives/ng_if';
import * as import32 from '@angular/forms/src/directives/ng_form';
import * as import33 from '@angular/forms/src/directives/control_container';
export class Wrapper_CheckoutComponent {
    constructor(p0, p1) {
        this._changed = false;
        this.context = new import0.CheckoutComponent(p0, p1);
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    }
    checkHost(view, componentView, el, throwOnChange) {
    }
    handleEvent(eventName, $event) {
        var result = true;
        return result;
    }
    subscribe(view, _eventHandler) {
        this._eventHandler = _eventHandler;
    }
}
var renderType_CheckoutComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_CheckoutComponent_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CheckoutComponent_Host0, renderType_CheckoutComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_CheckoutComponent0(this.viewUtils, this, 0, this._el_0);
        this._CheckoutComponent_0_3 = new Wrapper_CheckoutComponent(this.injectorGet(import8.OrderRepository, this.parentIndex), this.injectorGet(import9.Order, this.parentIndex));
        this.compView_0.create(this._CheckoutComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._CheckoutComponent_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.CheckoutComponent) && (0 === requestNodeIndex))) {
            return this._CheckoutComponent_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._CheckoutComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const CheckoutComponentNgFactory = new import7.ComponentFactory('ng-component', View_CheckoutComponent_Host0, import0.CheckoutComponent);
const styles_CheckoutComponent = [import10.styles];
class View_CheckoutComponent1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CheckoutComponent1, renderType_CheckoutComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'div', new import3.InlineArray2(2, 'class', 'm-a-1 text-xs-center'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'h2', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, 'Thanks!', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, 'Thanks for placing your order.', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_0, 'p', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, 'We\'ll ship your goods as soon as possible.', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_0, 'button', new import3.InlineArray4(4, 'class', 'btn btn-primary', 'routerLink', '/store'), null);
        this._RouterLink_11_3 = new import11.Wrapper_RouterLink(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex));
        this._text_12 = this.renderer.createText(this._el_11, 'Return to Store', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_11, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_11));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._el_5,
            this._text_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import15.RouterLink) && ((11 <= requestNodeIndex) && (requestNodeIndex <= 12)))) {
            return this._RouterLink_11_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_11_0_0 = '/store';
        this._RouterLink_11_3.check_routerLink(currVal_11_0_0, throwOnChange, false);
        this._RouterLink_11_3.ngDoCheck(this, this._el_11, throwOnChange);
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_11(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_11_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
class View_CheckoutComponent3 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CheckoutComponent3, renderType_CheckoutComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\nPlease enter your name\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_CheckoutComponent4 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CheckoutComponent4, renderType_CheckoutComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\nPlease enter your address\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_CheckoutComponent5 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CheckoutComponent5, renderType_CheckoutComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\nPlease enter your city\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_CheckoutComponent6 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CheckoutComponent6, renderType_CheckoutComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\nPlease enter your state\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_CheckoutComponent7 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CheckoutComponent7, renderType_CheckoutComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\nPlease enter your zip/postal code\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_CheckoutComponent8 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CheckoutComponent8, renderType_CheckoutComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'span', new import3.InlineArray2(2, 'class', 'text-danger'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\nPlease enter your country\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_CheckoutComponent2 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CheckoutComponent2, renderType_CheckoutComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'form', new import3.InlineArray4(4, 'class', 'm-a-1', 'novalidate', ''), null);
        this._NgForm_0_3 = new import16.Wrapper_NgForm(null, null);
        this._ControlContainer_0_4 = this._NgForm_0_3.context;
        this._NgControlStatusGroup_0_5 = new import17.Wrapper_NgControlStatusGroup(this._ControlContainer_0_4);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, 'Name', null);
        this._text_6 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_2, 'input', new import3.InlineArray8(6, 'class', 'form-control', 'name', 'name', 'required', ''), null);
        this._DefaultValueAccessor_7_3 = new import18.Wrapper_DefaultValueAccessor(this.renderer, new import22.ElementRef(this._el_7));
        this._RequiredValidator_7_4 = new import19.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_7_5 = [this._RequiredValidator_7_4.context];
        this._NG_VALUE_ACCESSOR_7_6 = [this._DefaultValueAccessor_7_3.context];
        this._NgModel_7_7 = new import20.Wrapper_NgModel(this._ControlContainer_0_4, this._NG_VALIDATORS_7_5, null, this._NG_VALUE_ACCESSOR_7_6);
        this._NgControl_7_8 = this._NgModel_7_7.context;
        this._NgControlStatus_7_9 = new import17.Wrapper_NgControlStatus(this._NgControl_7_8);
        this._text_8 = this.renderer.createText(this._el_2, '\n        ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_2, null);
        this._vc_9 = new import12.ViewContainer(9, 2, this, this._anchor_9);
        this._TemplateRef_9_5 = new import23.TemplateRef_(this, 9, this._anchor_9);
        this._NgIf_9_6 = new import21.Wrapper_NgIf(this._vc_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_11 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_13 = this.renderer.createText(this._el_12, '\n        ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_12, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, 'Address', null);
        this._text_16 = this.renderer.createText(this._el_12, '\n        ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_12, 'input', new import3.InlineArray8(6, 'class', 'form-control', 'name', 'address', 'required', ''), null);
        this._DefaultValueAccessor_17_3 = new import18.Wrapper_DefaultValueAccessor(this.renderer, new import22.ElementRef(this._el_17));
        this._RequiredValidator_17_4 = new import19.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_17_5 = [this._RequiredValidator_17_4.context];
        this._NG_VALUE_ACCESSOR_17_6 = [this._DefaultValueAccessor_17_3.context];
        this._NgModel_17_7 = new import20.Wrapper_NgModel(this._ControlContainer_0_4, this._NG_VALIDATORS_17_5, null, this._NG_VALUE_ACCESSOR_17_6);
        this._NgControl_17_8 = this._NgModel_17_7.context;
        this._NgControlStatus_17_9 = new import17.Wrapper_NgControlStatus(this._NgControl_17_8);
        this._text_18 = this.renderer.createText(this._el_12, '\n        ', null);
        this._anchor_19 = this.renderer.createTemplateAnchor(this._el_12, null);
        this._vc_19 = new import12.ViewContainer(19, 12, this, this._anchor_19);
        this._TemplateRef_19_5 = new import23.TemplateRef_(this, 19, this._anchor_19);
        this._NgIf_19_6 = new import21.Wrapper_NgIf(this._vc_19.vcRef, this._TemplateRef_19_5);
        this._text_20 = this.renderer.createText(this._el_12, '\n    ', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_23 = this.renderer.createText(this._el_22, '\n        ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_22, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_25 = this.renderer.createText(this._el_24, 'City', null);
        this._text_26 = this.renderer.createText(this._el_22, '\n        ', null);
        this._el_27 = import3.createRenderElement(this.renderer, this._el_22, 'input', new import3.InlineArray8(6, 'class', 'form-control', 'name', 'city', 'required', ''), null);
        this._DefaultValueAccessor_27_3 = new import18.Wrapper_DefaultValueAccessor(this.renderer, new import22.ElementRef(this._el_27));
        this._RequiredValidator_27_4 = new import19.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_27_5 = [this._RequiredValidator_27_4.context];
        this._NG_VALUE_ACCESSOR_27_6 = [this._DefaultValueAccessor_27_3.context];
        this._NgModel_27_7 = new import20.Wrapper_NgModel(this._ControlContainer_0_4, this._NG_VALIDATORS_27_5, null, this._NG_VALUE_ACCESSOR_27_6);
        this._NgControl_27_8 = this._NgModel_27_7.context;
        this._NgControlStatus_27_9 = new import17.Wrapper_NgControlStatus(this._NgControl_27_8);
        this._text_28 = this.renderer.createText(this._el_22, '\n        ', null);
        this._anchor_29 = this.renderer.createTemplateAnchor(this._el_22, null);
        this._vc_29 = new import12.ViewContainer(29, 22, this, this._anchor_29);
        this._TemplateRef_29_5 = new import23.TemplateRef_(this, 29, this._anchor_29);
        this._NgIf_29_6 = new import21.Wrapper_NgIf(this._vc_29.vcRef, this._TemplateRef_29_5);
        this._text_30 = this.renderer.createText(this._el_22, '\n    ', null);
        this._text_31 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_32 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_33 = this.renderer.createText(this._el_32, '\n        ', null);
        this._el_34 = import3.createRenderElement(this.renderer, this._el_32, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_35 = this.renderer.createText(this._el_34, 'State', null);
        this._text_36 = this.renderer.createText(this._el_32, '\n        ', null);
        this._el_37 = import3.createRenderElement(this.renderer, this._el_32, 'input', new import3.InlineArray8(6, 'class', 'form-control', 'name', 'state', 'required', ''), null);
        this._DefaultValueAccessor_37_3 = new import18.Wrapper_DefaultValueAccessor(this.renderer, new import22.ElementRef(this._el_37));
        this._RequiredValidator_37_4 = new import19.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_37_5 = [this._RequiredValidator_37_4.context];
        this._NG_VALUE_ACCESSOR_37_6 = [this._DefaultValueAccessor_37_3.context];
        this._NgModel_37_7 = new import20.Wrapper_NgModel(this._ControlContainer_0_4, this._NG_VALIDATORS_37_5, null, this._NG_VALUE_ACCESSOR_37_6);
        this._NgControl_37_8 = this._NgModel_37_7.context;
        this._NgControlStatus_37_9 = new import17.Wrapper_NgControlStatus(this._NgControl_37_8);
        this._text_38 = this.renderer.createText(this._el_32, '\n        ', null);
        this._anchor_39 = this.renderer.createTemplateAnchor(this._el_32, null);
        this._vc_39 = new import12.ViewContainer(39, 32, this, this._anchor_39);
        this._TemplateRef_39_5 = new import23.TemplateRef_(this, 39, this._anchor_39);
        this._NgIf_39_6 = new import21.Wrapper_NgIf(this._vc_39.vcRef, this._TemplateRef_39_5);
        this._text_40 = this.renderer.createText(this._el_32, '\n    ', null);
        this._text_41 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_43 = this.renderer.createText(this._el_42, '\n        ', null);
        this._el_44 = import3.createRenderElement(this.renderer, this._el_42, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_45 = this.renderer.createText(this._el_44, 'Zip/Postal Code', null);
        this._text_46 = this.renderer.createText(this._el_42, '\n        ', null);
        this._el_47 = import3.createRenderElement(this.renderer, this._el_42, 'input', new import3.InlineArray8(6, 'class', 'form-control', 'name', 'zip', 'required', ''), null);
        this._DefaultValueAccessor_47_3 = new import18.Wrapper_DefaultValueAccessor(this.renderer, new import22.ElementRef(this._el_47));
        this._RequiredValidator_47_4 = new import19.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_47_5 = [this._RequiredValidator_47_4.context];
        this._NG_VALUE_ACCESSOR_47_6 = [this._DefaultValueAccessor_47_3.context];
        this._NgModel_47_7 = new import20.Wrapper_NgModel(this._ControlContainer_0_4, this._NG_VALIDATORS_47_5, null, this._NG_VALUE_ACCESSOR_47_6);
        this._NgControl_47_8 = this._NgModel_47_7.context;
        this._NgControlStatus_47_9 = new import17.Wrapper_NgControlStatus(this._NgControl_47_8);
        this._text_48 = this.renderer.createText(this._el_42, '\n        ', null);
        this._anchor_49 = this.renderer.createTemplateAnchor(this._el_42, null);
        this._vc_49 = new import12.ViewContainer(49, 42, this, this._anchor_49);
        this._TemplateRef_49_5 = new import23.TemplateRef_(this, 49, this._anchor_49);
        this._NgIf_49_6 = new import21.Wrapper_NgIf(this._vc_49.vcRef, this._TemplateRef_49_5);
        this._text_50 = this.renderer.createText(this._el_42, '\n    ', null);
        this._text_51 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_52 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'form-group'), null);
        this._text_53 = this.renderer.createText(this._el_52, '\n        ', null);
        this._el_54 = import3.createRenderElement(this.renderer, this._el_52, 'label', import3.EMPTY_INLINE_ARRAY, null);
        this._text_55 = this.renderer.createText(this._el_54, 'Country', null);
        this._text_56 = this.renderer.createText(this._el_52, '\n        ', null);
        this._el_57 = import3.createRenderElement(this.renderer, this._el_52, 'input', new import3.InlineArray8(6, 'class', 'form-control', 'name', 'country', 'required', ''), null);
        this._DefaultValueAccessor_57_3 = new import18.Wrapper_DefaultValueAccessor(this.renderer, new import22.ElementRef(this._el_57));
        this._RequiredValidator_57_4 = new import19.Wrapper_RequiredValidator();
        this._NG_VALIDATORS_57_5 = [this._RequiredValidator_57_4.context];
        this._NG_VALUE_ACCESSOR_57_6 = [this._DefaultValueAccessor_57_3.context];
        this._NgModel_57_7 = new import20.Wrapper_NgModel(this._ControlContainer_0_4, this._NG_VALIDATORS_57_5, null, this._NG_VALUE_ACCESSOR_57_6);
        this._NgControl_57_8 = this._NgModel_57_7.context;
        this._NgControlStatus_57_9 = new import17.Wrapper_NgControlStatus(this._NgControl_57_8);
        this._text_58 = this.renderer.createText(this._el_52, '\n        ', null);
        this._anchor_59 = this.renderer.createTemplateAnchor(this._el_52, null);
        this._vc_59 = new import12.ViewContainer(59, 52, this, this._anchor_59);
        this._TemplateRef_59_5 = new import23.TemplateRef_(this, 59, this._anchor_59);
        this._NgIf_59_6 = new import21.Wrapper_NgIf(this._vc_59.vcRef, this._TemplateRef_59_5);
        this._text_60 = this.renderer.createText(this._el_52, '\n    ', null);
        this._text_61 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_62 = import3.createRenderElement(this.renderer, this._el_0, 'div', new import3.InlineArray2(2, 'class', 'text-xs-center'), null);
        this._text_63 = this.renderer.createText(this._el_62, '\n        ', null);
        this._el_64 = import3.createRenderElement(this.renderer, this._el_62, 'button', new import3.InlineArray4(4, 'class', 'btn btn-secondary', 'routerLink', '/cart'), null);
        this._RouterLink_64_3 = new import11.Wrapper_RouterLink(this.parentView.injectorGet(import13.Router, this.parentIndex), this.parentView.injectorGet(import14.ActivatedRoute, this.parentIndex));
        this._text_65 = this.renderer.createText(this._el_64, 'Back', null);
        this._text_66 = this.renderer.createText(this._el_62, '\n        ', null);
        this._el_67 = import3.createRenderElement(this.renderer, this._el_62, 'button', new import3.InlineArray4(4, 'class', 'btn btn-primary', 'type', 'submit'), null);
        this._text_68 = this.renderer.createText(this._el_67, 'Complete Order', null);
        this._text_69 = this.renderer.createText(this._el_62, '\n    ', null);
        this._text_70 = this.renderer.createText(this._el_0, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_0, new import3.InlineArray8(6, 'ngSubmit', null, 'submit', null, 'reset', null), this.eventHandler(this.handleEvent_0));
        this._NgForm_0_3.subscribe(this, this.eventHandler(this.handleEvent_0), true);
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_7, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_7));
        this._NgModel_7_7.subscribe(this, this.eventHandler(this.handleEvent_7), true);
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_17, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_17));
        this._NgModel_17_7.subscribe(this, this.eventHandler(this.handleEvent_17), true);
        var disposable_3 = import3.subscribeToRenderElement(this, this._el_27, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_27));
        this._NgModel_27_7.subscribe(this, this.eventHandler(this.handleEvent_27), true);
        var disposable_4 = import3.subscribeToRenderElement(this, this._el_37, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_37));
        this._NgModel_37_7.subscribe(this, this.eventHandler(this.handleEvent_37), true);
        var disposable_5 = import3.subscribeToRenderElement(this, this._el_47, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_47));
        this._NgModel_47_7.subscribe(this, this.eventHandler(this.handleEvent_47), true);
        var disposable_6 = import3.subscribeToRenderElement(this, this._el_57, new import3.InlineArray8(6, 'ngModelChange', null, 'input', null, 'blur', null), this.eventHandler(this.handleEvent_57));
        this._NgModel_57_7.subscribe(this, this.eventHandler(this.handleEvent_57), true);
        var disposable_7 = import3.subscribeToRenderElement(this, this._el_64, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_64));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6,
            this._el_7,
            this._text_8,
            this._anchor_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._anchor_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._anchor_29,
            this._text_30,
            this._text_31,
            this._el_32,
            this._text_33,
            this._el_34,
            this._text_35,
            this._text_36,
            this._el_37,
            this._text_38,
            this._anchor_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._el_47,
            this._text_48,
            this._anchor_49,
            this._text_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._anchor_59,
            this._text_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._el_64,
            this._text_65,
            this._text_66,
            this._el_67,
            this._text_68,
            this._text_69,
            this._text_70
        ]), [
            disposable_0,
            disposable_1,
            disposable_2,
            disposable_3,
            disposable_4,
            disposable_5,
            disposable_6,
            disposable_7
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import24.DefaultValueAccessor) && (7 === requestNodeIndex))) {
            return this._DefaultValueAccessor_7_3.context;
        }
        if (((token === import25.RequiredValidator) && (7 === requestNodeIndex))) {
            return this._RequiredValidator_7_4.context;
        }
        if (((token === import26.NG_VALIDATORS) && (7 === requestNodeIndex))) {
            return this._NG_VALIDATORS_7_5;
        }
        if (((token === import27.NG_VALUE_ACCESSOR) && (7 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_7_6;
        }
        if (((token === import28.NgModel) && (7 === requestNodeIndex))) {
            return this._NgModel_7_7.context;
        }
        if (((token === import29.NgControl) && (7 === requestNodeIndex))) {
            return this._NgControl_7_8;
        }
        if (((token === import30.NgControlStatus) && (7 === requestNodeIndex))) {
            return this._NgControlStatus_7_9.context;
        }
        if (((token === import23.TemplateRef) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === import31.NgIf) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6.context;
        }
        if (((token === import24.DefaultValueAccessor) && (17 === requestNodeIndex))) {
            return this._DefaultValueAccessor_17_3.context;
        }
        if (((token === import25.RequiredValidator) && (17 === requestNodeIndex))) {
            return this._RequiredValidator_17_4.context;
        }
        if (((token === import26.NG_VALIDATORS) && (17 === requestNodeIndex))) {
            return this._NG_VALIDATORS_17_5;
        }
        if (((token === import27.NG_VALUE_ACCESSOR) && (17 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_17_6;
        }
        if (((token === import28.NgModel) && (17 === requestNodeIndex))) {
            return this._NgModel_17_7.context;
        }
        if (((token === import29.NgControl) && (17 === requestNodeIndex))) {
            return this._NgControl_17_8;
        }
        if (((token === import30.NgControlStatus) && (17 === requestNodeIndex))) {
            return this._NgControlStatus_17_9.context;
        }
        if (((token === import23.TemplateRef) && (19 === requestNodeIndex))) {
            return this._TemplateRef_19_5;
        }
        if (((token === import31.NgIf) && (19 === requestNodeIndex))) {
            return this._NgIf_19_6.context;
        }
        if (((token === import24.DefaultValueAccessor) && (27 === requestNodeIndex))) {
            return this._DefaultValueAccessor_27_3.context;
        }
        if (((token === import25.RequiredValidator) && (27 === requestNodeIndex))) {
            return this._RequiredValidator_27_4.context;
        }
        if (((token === import26.NG_VALIDATORS) && (27 === requestNodeIndex))) {
            return this._NG_VALIDATORS_27_5;
        }
        if (((token === import27.NG_VALUE_ACCESSOR) && (27 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_27_6;
        }
        if (((token === import28.NgModel) && (27 === requestNodeIndex))) {
            return this._NgModel_27_7.context;
        }
        if (((token === import29.NgControl) && (27 === requestNodeIndex))) {
            return this._NgControl_27_8;
        }
        if (((token === import30.NgControlStatus) && (27 === requestNodeIndex))) {
            return this._NgControlStatus_27_9.context;
        }
        if (((token === import23.TemplateRef) && (29 === requestNodeIndex))) {
            return this._TemplateRef_29_5;
        }
        if (((token === import31.NgIf) && (29 === requestNodeIndex))) {
            return this._NgIf_29_6.context;
        }
        if (((token === import24.DefaultValueAccessor) && (37 === requestNodeIndex))) {
            return this._DefaultValueAccessor_37_3.context;
        }
        if (((token === import25.RequiredValidator) && (37 === requestNodeIndex))) {
            return this._RequiredValidator_37_4.context;
        }
        if (((token === import26.NG_VALIDATORS) && (37 === requestNodeIndex))) {
            return this._NG_VALIDATORS_37_5;
        }
        if (((token === import27.NG_VALUE_ACCESSOR) && (37 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_37_6;
        }
        if (((token === import28.NgModel) && (37 === requestNodeIndex))) {
            return this._NgModel_37_7.context;
        }
        if (((token === import29.NgControl) && (37 === requestNodeIndex))) {
            return this._NgControl_37_8;
        }
        if (((token === import30.NgControlStatus) && (37 === requestNodeIndex))) {
            return this._NgControlStatus_37_9.context;
        }
        if (((token === import23.TemplateRef) && (39 === requestNodeIndex))) {
            return this._TemplateRef_39_5;
        }
        if (((token === import31.NgIf) && (39 === requestNodeIndex))) {
            return this._NgIf_39_6.context;
        }
        if (((token === import24.DefaultValueAccessor) && (47 === requestNodeIndex))) {
            return this._DefaultValueAccessor_47_3.context;
        }
        if (((token === import25.RequiredValidator) && (47 === requestNodeIndex))) {
            return this._RequiredValidator_47_4.context;
        }
        if (((token === import26.NG_VALIDATORS) && (47 === requestNodeIndex))) {
            return this._NG_VALIDATORS_47_5;
        }
        if (((token === import27.NG_VALUE_ACCESSOR) && (47 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_47_6;
        }
        if (((token === import28.NgModel) && (47 === requestNodeIndex))) {
            return this._NgModel_47_7.context;
        }
        if (((token === import29.NgControl) && (47 === requestNodeIndex))) {
            return this._NgControl_47_8;
        }
        if (((token === import30.NgControlStatus) && (47 === requestNodeIndex))) {
            return this._NgControlStatus_47_9.context;
        }
        if (((token === import23.TemplateRef) && (49 === requestNodeIndex))) {
            return this._TemplateRef_49_5;
        }
        if (((token === import31.NgIf) && (49 === requestNodeIndex))) {
            return this._NgIf_49_6.context;
        }
        if (((token === import24.DefaultValueAccessor) && (57 === requestNodeIndex))) {
            return this._DefaultValueAccessor_57_3.context;
        }
        if (((token === import25.RequiredValidator) && (57 === requestNodeIndex))) {
            return this._RequiredValidator_57_4.context;
        }
        if (((token === import26.NG_VALIDATORS) && (57 === requestNodeIndex))) {
            return this._NG_VALIDATORS_57_5;
        }
        if (((token === import27.NG_VALUE_ACCESSOR) && (57 === requestNodeIndex))) {
            return this._NG_VALUE_ACCESSOR_57_6;
        }
        if (((token === import28.NgModel) && (57 === requestNodeIndex))) {
            return this._NgModel_57_7.context;
        }
        if (((token === import29.NgControl) && (57 === requestNodeIndex))) {
            return this._NgControl_57_8;
        }
        if (((token === import30.NgControlStatus) && (57 === requestNodeIndex))) {
            return this._NgControlStatus_57_9.context;
        }
        if (((token === import23.TemplateRef) && (59 === requestNodeIndex))) {
            return this._TemplateRef_59_5;
        }
        if (((token === import31.NgIf) && (59 === requestNodeIndex))) {
            return this._NgIf_59_6.context;
        }
        if (((token === import15.RouterLink) && ((64 <= requestNodeIndex) && (requestNodeIndex <= 65)))) {
            return this._RouterLink_64_3.context;
        }
        if (((token === import32.NgForm) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 70)))) {
            return this._NgForm_0_3.context;
        }
        if (((token === import33.ControlContainer) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 70)))) {
            return this._ControlContainer_0_4;
        }
        if (((token === import30.NgControlStatusGroup) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 70)))) {
            return this._NgControlStatusGroup_0_5.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._NgForm_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this._NgControlStatusGroup_0_5.ngDoCheck(this, this._el_0, throwOnChange);
        this._DefaultValueAccessor_7_3.ngDoCheck(this, this._el_7, throwOnChange);
        const currVal_7_1_0 = '';
        this._RequiredValidator_7_4.check_required(currVal_7_1_0, throwOnChange, false);
        this._RequiredValidator_7_4.ngDoCheck(this, this._el_7, throwOnChange);
        const currVal_7_2_0 = 'name';
        this._NgModel_7_7.check_name(currVal_7_2_0, throwOnChange, false);
        const currVal_7_2_1 = this.parentView.context.order.name;
        this._NgModel_7_7.check_model(currVal_7_2_1, throwOnChange, false);
        this._NgModel_7_7.ngDoCheck(this, this._el_7, throwOnChange);
        this._NgControlStatus_7_9.ngDoCheck(this, this._el_7, throwOnChange);
        const currVal_9_0_0 = (this.parentView.context.submitted && this._NgModel_7_7.context.invalid);
        this._NgIf_9_6.check_ngIf(currVal_9_0_0, throwOnChange, false);
        this._NgIf_9_6.ngDoCheck(this, this._anchor_9, throwOnChange);
        this._DefaultValueAccessor_17_3.ngDoCheck(this, this._el_17, throwOnChange);
        const currVal_17_1_0 = '';
        this._RequiredValidator_17_4.check_required(currVal_17_1_0, throwOnChange, false);
        this._RequiredValidator_17_4.ngDoCheck(this, this._el_17, throwOnChange);
        const currVal_17_2_0 = 'address';
        this._NgModel_17_7.check_name(currVal_17_2_0, throwOnChange, false);
        const currVal_17_2_1 = this.parentView.context.order.address;
        this._NgModel_17_7.check_model(currVal_17_2_1, throwOnChange, false);
        this._NgModel_17_7.ngDoCheck(this, this._el_17, throwOnChange);
        this._NgControlStatus_17_9.ngDoCheck(this, this._el_17, throwOnChange);
        const currVal_19_0_0 = (this.parentView.context.submitted && this._NgModel_17_7.context.invalid);
        this._NgIf_19_6.check_ngIf(currVal_19_0_0, throwOnChange, false);
        this._NgIf_19_6.ngDoCheck(this, this._anchor_19, throwOnChange);
        this._DefaultValueAccessor_27_3.ngDoCheck(this, this._el_27, throwOnChange);
        const currVal_27_1_0 = '';
        this._RequiredValidator_27_4.check_required(currVal_27_1_0, throwOnChange, false);
        this._RequiredValidator_27_4.ngDoCheck(this, this._el_27, throwOnChange);
        const currVal_27_2_0 = 'city';
        this._NgModel_27_7.check_name(currVal_27_2_0, throwOnChange, false);
        const currVal_27_2_1 = this.parentView.context.order.city;
        this._NgModel_27_7.check_model(currVal_27_2_1, throwOnChange, false);
        this._NgModel_27_7.ngDoCheck(this, this._el_27, throwOnChange);
        this._NgControlStatus_27_9.ngDoCheck(this, this._el_27, throwOnChange);
        const currVal_29_0_0 = (this.parentView.context.submitted && this._NgModel_27_7.context.invalid);
        this._NgIf_29_6.check_ngIf(currVal_29_0_0, throwOnChange, false);
        this._NgIf_29_6.ngDoCheck(this, this._anchor_29, throwOnChange);
        this._DefaultValueAccessor_37_3.ngDoCheck(this, this._el_37, throwOnChange);
        const currVal_37_1_0 = '';
        this._RequiredValidator_37_4.check_required(currVal_37_1_0, throwOnChange, false);
        this._RequiredValidator_37_4.ngDoCheck(this, this._el_37, throwOnChange);
        const currVal_37_2_0 = 'state';
        this._NgModel_37_7.check_name(currVal_37_2_0, throwOnChange, false);
        const currVal_37_2_1 = this.parentView.context.order.state;
        this._NgModel_37_7.check_model(currVal_37_2_1, throwOnChange, false);
        this._NgModel_37_7.ngDoCheck(this, this._el_37, throwOnChange);
        this._NgControlStatus_37_9.ngDoCheck(this, this._el_37, throwOnChange);
        const currVal_39_0_0 = (this.parentView.context.submitted && this._NgModel_37_7.context.invalid);
        this._NgIf_39_6.check_ngIf(currVal_39_0_0, throwOnChange, false);
        this._NgIf_39_6.ngDoCheck(this, this._anchor_39, throwOnChange);
        this._DefaultValueAccessor_47_3.ngDoCheck(this, this._el_47, throwOnChange);
        const currVal_47_1_0 = '';
        this._RequiredValidator_47_4.check_required(currVal_47_1_0, throwOnChange, false);
        this._RequiredValidator_47_4.ngDoCheck(this, this._el_47, throwOnChange);
        const currVal_47_2_0 = 'zip';
        this._NgModel_47_7.check_name(currVal_47_2_0, throwOnChange, false);
        const currVal_47_2_1 = this.parentView.context.order.zip;
        this._NgModel_47_7.check_model(currVal_47_2_1, throwOnChange, false);
        this._NgModel_47_7.ngDoCheck(this, this._el_47, throwOnChange);
        this._NgControlStatus_47_9.ngDoCheck(this, this._el_47, throwOnChange);
        const currVal_49_0_0 = (this.parentView.context.submitted && this._NgModel_47_7.context.invalid);
        this._NgIf_49_6.check_ngIf(currVal_49_0_0, throwOnChange, false);
        this._NgIf_49_6.ngDoCheck(this, this._anchor_49, throwOnChange);
        this._DefaultValueAccessor_57_3.ngDoCheck(this, this._el_57, throwOnChange);
        const currVal_57_1_0 = '';
        this._RequiredValidator_57_4.check_required(currVal_57_1_0, throwOnChange, false);
        this._RequiredValidator_57_4.ngDoCheck(this, this._el_57, throwOnChange);
        const currVal_57_2_0 = 'country';
        this._NgModel_57_7.check_name(currVal_57_2_0, throwOnChange, false);
        const currVal_57_2_1 = this.parentView.context.order.country;
        this._NgModel_57_7.check_model(currVal_57_2_1, throwOnChange, false);
        this._NgModel_57_7.ngDoCheck(this, this._el_57, throwOnChange);
        this._NgControlStatus_57_9.ngDoCheck(this, this._el_57, throwOnChange);
        const currVal_59_0_0 = (this.parentView.context.submitted && this._NgModel_57_7.context.invalid);
        this._NgIf_59_6.check_ngIf(currVal_59_0_0, throwOnChange, false);
        this._NgIf_59_6.ngDoCheck(this, this._anchor_59, throwOnChange);
        const currVal_64_0_0 = '/cart';
        this._RouterLink_64_3.check_routerLink(currVal_64_0_0, throwOnChange, false);
        this._RouterLink_64_3.ngDoCheck(this, this._el_64, throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        this._vc_19.detectChangesInNestedViews(throwOnChange);
        this._vc_29.detectChangesInNestedViews(throwOnChange);
        this._vc_39.detectChangesInNestedViews(throwOnChange);
        this._vc_49.detectChangesInNestedViews(throwOnChange);
        this._vc_59.detectChangesInNestedViews(throwOnChange);
        this._NgControlStatusGroup_0_5.checkHost(this, this, this._el_0, throwOnChange);
        this._RequiredValidator_7_4.checkHost(this, this, this._el_7, throwOnChange);
        this._NgControlStatus_7_9.checkHost(this, this, this._el_7, throwOnChange);
        this._RequiredValidator_17_4.checkHost(this, this, this._el_17, throwOnChange);
        this._NgControlStatus_17_9.checkHost(this, this, this._el_17, throwOnChange);
        this._RequiredValidator_27_4.checkHost(this, this, this._el_27, throwOnChange);
        this._NgControlStatus_27_9.checkHost(this, this, this._el_27, throwOnChange);
        this._RequiredValidator_37_4.checkHost(this, this, this._el_37, throwOnChange);
        this._NgControlStatus_37_9.checkHost(this, this, this._el_37, throwOnChange);
        this._RequiredValidator_47_4.checkHost(this, this, this._el_47, throwOnChange);
        this._NgControlStatus_47_9.checkHost(this, this, this._el_47, throwOnChange);
        this._RequiredValidator_57_4.checkHost(this, this, this._el_57, throwOnChange);
        this._NgControlStatus_57_9.checkHost(this, this, this._el_57, throwOnChange);
    }
    destroyInternal() {
        this._vc_9.destroyNestedViews();
        this._vc_19.destroyNestedViews();
        this._vc_29.destroyNestedViews();
        this._vc_39.destroyNestedViews();
        this._vc_49.destroyNestedViews();
        this._vc_59.destroyNestedViews();
        this._NgModel_7_7.ngOnDestroy();
        this._NgModel_17_7.ngOnDestroy();
        this._NgModel_27_7.ngOnDestroy();
        this._NgModel_37_7.ngOnDestroy();
        this._NgModel_47_7.ngOnDestroy();
        this._NgModel_57_7.ngOnDestroy();
        this._NgForm_0_3.ngOnDestroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 9)) {
            return new View_CheckoutComponent3(this.viewUtils, this, 9, this._anchor_9, this._vc_9);
        }
        if ((nodeIndex == 19)) {
            return new View_CheckoutComponent4(this.viewUtils, this, 19, this._anchor_19, this._vc_19);
        }
        if ((nodeIndex == 29)) {
            return new View_CheckoutComponent5(this.viewUtils, this, 29, this._anchor_29, this._vc_29);
        }
        if ((nodeIndex == 39)) {
            return new View_CheckoutComponent6(this.viewUtils, this, 39, this._anchor_39, this._vc_39);
        }
        if ((nodeIndex == 49)) {
            return new View_CheckoutComponent7(this.viewUtils, this, 49, this._anchor_49, this._vc_49);
        }
        if ((nodeIndex == 59)) {
            return new View_CheckoutComponent8(this.viewUtils, this, 59, this._anchor_59, this._vc_59);
        }
        return null;
    }
    handleEvent_0(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._NgForm_0_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngSubmit')) {
            const pd_sub_0 = (this.parentView.context.submitOrder(this._NgForm_0_3.context) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_7(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_7_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.parentView.context.order.name = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_17(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_17_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.parentView.context.order.address = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_27(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_27_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.parentView.context.order.city = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_37(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_37_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.parentView.context.order.state = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_47(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_47_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.parentView.context.order.zip = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_57(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._DefaultValueAccessor_57_3.handleEvent(eventName, $event) && result);
        if ((eventName == 'ngModelChange')) {
            const pd_sub_0 = ((this.parentView.context.order.country = $event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_64(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_64_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
var renderType_CheckoutComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.Emulated, styles_CheckoutComponent, {});
export class View_CheckoutComponent0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CheckoutComponent0, renderType_CheckoutComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'navbar navbar-inverse bg-inverse'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'class', 'navbar-brand'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'SPORTS STORE', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_6 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_6 = new import12.ViewContainer(6, null, this, this._anchor_6);
        this._TemplateRef_6_5 = new import23.TemplateRef_(this, 6, this._anchor_6);
        this._NgIf_6_6 = new import21.Wrapper_NgIf(this._vc_6.vcRef, this._TemplateRef_6_5);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_8 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_8 = new import12.ViewContainer(8, null, this, this._anchor_8);
        this._TemplateRef_8_5 = new import23.TemplateRef_(this, 8, this._anchor_8);
        this._NgIf_8_6 = new import21.Wrapper_NgIf(this._vc_8.vcRef, this._TemplateRef_8_5);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._text_5,
            this._anchor_6,
            this._text_7,
            this._anchor_8
        ]), null);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import23.TemplateRef) && (6 === requestNodeIndex))) {
            return this._TemplateRef_6_5;
        }
        if (((token === import31.NgIf) && (6 === requestNodeIndex))) {
            return this._NgIf_6_6.context;
        }
        if (((token === import23.TemplateRef) && (8 === requestNodeIndex))) {
            return this._TemplateRef_8_5;
        }
        if (((token === import31.NgIf) && (8 === requestNodeIndex))) {
            return this._NgIf_8_6.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_6_0_0 = this.context.orderSent;
        this._NgIf_6_6.check_ngIf(currVal_6_0_0, throwOnChange, false);
        this._NgIf_6_6.ngDoCheck(this, this._anchor_6, throwOnChange);
        const currVal_8_0_0 = !this.context.orderSent;
        this._NgIf_8_6.check_ngIf(currVal_8_0_0, throwOnChange, false);
        this._NgIf_8_6.ngDoCheck(this, this._anchor_8, throwOnChange);
        this._vc_6.detectChangesInNestedViews(throwOnChange);
        this._vc_8.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_6.destroyNestedViews();
        this._vc_8.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 6)) {
            return new View_CheckoutComponent1(this.viewUtils, this, 6, this._anchor_6, this._vc_6);
        }
        if ((nodeIndex == 8)) {
            return new View_CheckoutComponent2(this.viewUtils, this, 8, this._anchor_8, this._vc_8);
        }
        return null;
    }
}
//# sourceMappingURL=checkout.component.ngfactory.js.map