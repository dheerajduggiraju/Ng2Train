import * as import0 from '../../../app/store/cartDetail.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/model/cart.model';
import * as import9 from '@angular/core/src/linker/view_container';
import * as import10 from '@angular/core/src/change_detection/change_detection_util';
import * as import11 from '../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import12 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import14 from '@angular/common/src/pipes/number_pipe';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/router/src/router';
import * as import18 from '@angular/router/src/router_state';
import * as import19 from '@angular/core/src/i18n/tokens';
import * as import20 from '@angular/common/src/directives/ng_if';
import * as import21 from '@angular/common/src/directives/ng_for';
import * as import22 from '@angular/router/src/directives/router_link';
export class Wrapper_CartDetailComponent {
    constructor(p0) {
        this._changed = false;
        this.context = new import0.CartDetailComponent(p0);
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
var renderType_CartDetailComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_CartDetailComponent_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CartDetailComponent_Host0, renderType_CartDetailComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_CartDetailComponent0(this.viewUtils, this, 0, this._el_0);
        this._CartDetailComponent_0_3 = new Wrapper_CartDetailComponent(this.injectorGet(import8.Cart, this.parentIndex));
        this.compView_0.create(this._CartDetailComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._CartDetailComponent_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.CartDetailComponent) && (0 === requestNodeIndex))) {
            return this._CartDetailComponent_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._CartDetailComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const CartDetailComponentNgFactory = new import7.ComponentFactory('ng-component', View_CartDetailComponent_Host0, import0.CartDetailComponent);
const styles_CartDetailComponent = [];
class View_CartDetailComponent1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CartDetailComponent1, renderType_CartDetailComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', new import3.InlineArray4(4, 'class', 'text-xs-center', 'colspan', '4'), null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                    Your cart is empty\n                ', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4
        ]), null);
        return null;
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
class View_CartDetailComponent2 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_CartDetailComponent2, renderType_CartDetailComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_22 = import10.UNINITIALIZED;
        this._expr_23 = import10.UNINITIALIZED;
        this._expr_24 = import10.UNINITIALIZED;
        this._expr_26 = import10.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n                    ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'input', new import3.InlineArray8(6, 'class', 'form-control-sm', 'style', 'width:5em', 'type', 'number'), null);
        this._text_5 = this.renderer.createText(this._el_2, '\n                ', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_7 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_8 = this.renderer.createText(this._el_7, '', null);
        this._text_9 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_0, 'td', new import3.InlineArray2(2, 'class', 'text-xs-right'), null);
        this._text_11 = this.renderer.createText(this._el_10, '', null);
        this._text_12 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_0, 'td', new import3.InlineArray2(2, 'class', 'text-xs-right'), null);
        this._text_14 = this.renderer.createText(this._el_13, '', null);
        this._text_15 = this.renderer.createText(this._el_0, '\n                ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_0, 'td', new import3.InlineArray2(2, 'class', 'text-xs-center'), null);
        this._text_17 = this.renderer.createText(this._el_16, '\n                    ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_16, 'button', new import3.InlineArray2(2, 'class', 'btn btn-sm btn-danger'), null);
        this._text_19 = this.renderer.createText(this._el_18, ' Remove ', null);
        this._text_20 = this.renderer.createText(this._el_16, '\n                ', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n            ', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_4, new import3.InlineArray2(2, 'change', null), this.eventHandler(this.handleEvent_4));
        this._pipe_currency_0_0 = import3.pureProxy4(this.parentView._pipe_currency_0.transform.bind(this.parentView._pipe_currency_0));
        this._pipe_currency_0_1 = import3.pureProxy4(this.parentView._pipe_currency_0.transform.bind(this.parentView._pipe_currency_0));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_18));
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
            this._text_9,
            this._el_10,
            this._text_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    }
    detectChangesInternal(throwOnChange) {
        const valUnwrapper = new import10.ValueUnwrapper();
        const currVal_22 = this.context.$implicit.quantity;
        if (import3.checkBinding(throwOnChange, this._expr_22, currVal_22)) {
            this.renderer.setElementProperty(this._el_4, 'value', currVal_22);
            this._expr_22 = currVal_22;
        }
        const currVal_23 = import3.inlineInterpolate(1, '', this.context.$implicit.product.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_23, currVal_23)) {
            this.renderer.setText(this._text_8, currVal_23);
            this._expr_23 = currVal_23;
        }
        valUnwrapper.reset();
        const currVal_24 = import3.inlineInterpolate(1, '\n                    ', valUnwrapper.unwrap(import3.castByValue(this._pipe_currency_0_0, this.parentView._pipe_currency_0.transform)(this.context.$implicit.product.price, 'USD', true, '2.2-2')), '\n                ');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_24, currVal_24))) {
            this.renderer.setText(this._text_11, currVal_24);
            this._expr_24 = currVal_24;
        }
        valUnwrapper.reset();
        const currVal_26 = import3.inlineInterpolate(1, '\n                    ', valUnwrapper.unwrap(import3.castByValue(this._pipe_currency_0_1, this.parentView._pipe_currency_0.transform)(this.context.$implicit.lineTotal, 'USD', true, '2.2-2')), '\n                ');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_26, currVal_26))) {
            this.renderer.setText(this._text_14, currVal_26);
            this._expr_26 = currVal_26;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_4(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'change')) {
            const pd_sub_0 = (this.parentView.context.cart.updateQuantity(this.context.$implicit.product, $event.target.value) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
    handleEvent_18(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.cart.removeLine(this.context.$implicit.product.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
var renderType_CartDetailComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_CartDetailComponent, {});
export class View_CartDetailComponent0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_CartDetailComponent0, renderType_CartDetailComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
        this._expr_69 = import10.UNINITIALIZED;
        this._expr_71 = import10.UNINITIALIZED;
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'navbar'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'class', 'navbar-brand'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'SPORTS STORE', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'm-a-1'), null);
        this._text_7 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_6, 'h2', new import3.InlineArray2(2, 'class', 'text-xs-center'), null);
        this._text_9 = this.renderer.createText(this._el_8, 'Your Cart', null);
        this._text_10 = this.renderer.createText(this._el_6, '\n    ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_6, 'table', new import3.InlineArray2(2, 'class', 'table table-bordered table-striped p-a-1'), null);
        this._text_12 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_13 = import3.createRenderElement(this.renderer, this._el_11, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_14 = this.renderer.createText(this._el_13, '\n            ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_13, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, '\n                ', null);
        this._el_17 = import3.createRenderElement(this.renderer, this._el_15, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_18 = this.renderer.createText(this._el_17, 'Quantity', null);
        this._text_19 = this.renderer.createText(this._el_15, '\n                ', null);
        this._el_20 = import3.createRenderElement(this.renderer, this._el_15, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_21 = this.renderer.createText(this._el_20, 'Product', null);
        this._text_22 = this.renderer.createText(this._el_15, '\n                ', null);
        this._el_23 = import3.createRenderElement(this.renderer, this._el_15, 'th', new import3.InlineArray2(2, 'class', 'text-xs-right'), null);
        this._text_24 = this.renderer.createText(this._el_23, 'Price', null);
        this._text_25 = this.renderer.createText(this._el_15, '\n                ', null);
        this._el_26 = import3.createRenderElement(this.renderer, this._el_15, 'th', new import3.InlineArray2(2, 'class', 'text-xs-right'), null);
        this._text_27 = this.renderer.createText(this._el_26, 'Subtotal', null);
        this._text_28 = this.renderer.createText(this._el_15, '\n            ', null);
        this._text_29 = this.renderer.createText(this._el_13, '\n        ', null);
        this._text_30 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_31 = import3.createRenderElement(this.renderer, this._el_11, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_32 = this.renderer.createText(this._el_31, '\n            ', null);
        this._anchor_33 = this.renderer.createTemplateAnchor(this._el_31, null);
        this._vc_33 = new import9.ViewContainer(33, 31, this, this._anchor_33);
        this._TemplateRef_33_5 = new import15.TemplateRef_(this, 33, this._anchor_33);
        this._NgIf_33_6 = new import11.Wrapper_NgIf(this._vc_33.vcRef, this._TemplateRef_33_5);
        this._text_34 = this.renderer.createText(this._el_31, '\n            ', null);
        this._anchor_35 = this.renderer.createTemplateAnchor(this._el_31, null);
        this._vc_35 = new import9.ViewContainer(35, 31, this, this._anchor_35);
        this._TemplateRef_35_5 = new import15.TemplateRef_(this, 35, this._anchor_35);
        this._NgFor_35_6 = new import12.Wrapper_NgFor(this._vc_35.vcRef, this._TemplateRef_35_5, this.parentView.injectorGet(import16.IterableDiffers, this.parentIndex), this.ref);
        this._text_36 = this.renderer.createText(this._el_31, '\n        ', null);
        this._text_37 = this.renderer.createText(this._el_11, '\n        ', null);
        this._el_38 = import3.createRenderElement(this.renderer, this._el_11, 'tfoot', import3.EMPTY_INLINE_ARRAY, null);
        this._text_39 = this.renderer.createText(this._el_38, '\n            ', null);
        this._el_40 = import3.createRenderElement(this.renderer, this._el_38, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_41 = this.renderer.createText(this._el_40, '\n                ', null);
        this._el_42 = import3.createRenderElement(this.renderer, this._el_40, 'td', new import3.InlineArray4(4, 'class', 'text-xs-right', 'colspan', '3'), null);
        this._text_43 = this.renderer.createText(this._el_42, 'Total:', null);
        this._text_44 = this.renderer.createText(this._el_40, '\n                ', null);
        this._el_45 = import3.createRenderElement(this.renderer, this._el_40, 'td', new import3.InlineArray2(2, 'class', 'text-xs-right'), null);
        this._text_46 = this.renderer.createText(this._el_45, '', null);
        this._text_47 = this.renderer.createText(this._el_40, '\n            ', null);
        this._text_48 = this.renderer.createText(this._el_38, '\n        ', null);
        this._text_49 = this.renderer.createText(this._el_11, '\n    ', null);
        this._text_50 = this.renderer.createText(this._el_6, '\n', null);
        this._text_51 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_52 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'text-xs-center'), null);
        this._text_53 = this.renderer.createText(this._el_52, '\n    ', null);
        this._el_54 = import3.createRenderElement(this.renderer, this._el_52, 'button', new import3.InlineArray4(4, 'class', 'btn btn-primary', 'routerLink', '/store'), null);
        this._RouterLink_54_3 = new import13.Wrapper_RouterLink(this.parentView.injectorGet(import17.Router, this.parentIndex), this.parentView.injectorGet(import18.ActivatedRoute, this.parentIndex));
        this._text_55 = this.renderer.createText(this._el_54, 'Continue Shopping', null);
        this._text_56 = this.renderer.createText(this._el_52, '\n    ', null);
        this._el_57 = import3.createRenderElement(this.renderer, this._el_52, 'button', new import3.InlineArray4(4, 'class', 'btn btn-secondary', 'routerLink', '/checkout'), null);
        this._RouterLink_57_3 = new import13.Wrapper_RouterLink(this.parentView.injectorGet(import17.Router, this.parentIndex), this.parentView.injectorGet(import18.ActivatedRoute, this.parentIndex));
        this._text_58 = this.renderer.createText(this._el_57, '\nCheckout\n', null);
        this._text_59 = this.renderer.createText(this._el_52, '\n', null);
        this._pipe_currency_0 = new import14.CurrencyPipe(this.parentView.injectorGet(import19.LOCALE_ID, this.parentIndex));
        this._pipe_currency_0_2 = import3.pureProxy4(this._pipe_currency_0.transform.bind(this._pipe_currency_0));
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_54, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_54));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_57, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_57));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._text_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._text_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._el_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._el_26,
            this._text_27,
            this._text_28,
            this._text_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._anchor_33,
            this._text_34,
            this._anchor_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._el_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._text_48,
            this._text_49,
            this._text_50,
            this._text_51,
            this._el_52,
            this._text_53,
            this._el_54,
            this._text_55,
            this._text_56,
            this._el_57,
            this._text_58,
            this._text_59
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import15.TemplateRef) && (33 === requestNodeIndex))) {
            return this._TemplateRef_33_5;
        }
        if (((token === import20.NgIf) && (33 === requestNodeIndex))) {
            return this._NgIf_33_6.context;
        }
        if (((token === import15.TemplateRef) && (35 === requestNodeIndex))) {
            return this._TemplateRef_35_5;
        }
        if (((token === import21.NgFor) && (35 === requestNodeIndex))) {
            return this._NgFor_35_6.context;
        }
        if (((token === import22.RouterLink) && ((54 <= requestNodeIndex) && (requestNodeIndex <= 55)))) {
            return this._RouterLink_54_3.context;
        }
        if (((token === import22.RouterLink) && ((57 <= requestNodeIndex) && (requestNodeIndex <= 58)))) {
            return this._RouterLink_57_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const valUnwrapper = new import10.ValueUnwrapper();
        const currVal_33_0_0 = (this.context.cart.lines.length == 0);
        this._NgIf_33_6.check_ngIf(currVal_33_0_0, throwOnChange, false);
        this._NgIf_33_6.ngDoCheck(this, this._anchor_33, throwOnChange);
        const currVal_35_0_0 = this.context.cart.lines;
        this._NgFor_35_6.check_ngForOf(currVal_35_0_0, throwOnChange, false);
        this._NgFor_35_6.ngDoCheck(this, this._anchor_35, throwOnChange);
        const currVal_54_0_0 = '/store';
        this._RouterLink_54_3.check_routerLink(currVal_54_0_0, throwOnChange, false);
        this._RouterLink_54_3.ngDoCheck(this, this._el_54, throwOnChange);
        const currVal_57_0_0 = '/checkout';
        this._RouterLink_57_3.check_routerLink(currVal_57_0_0, throwOnChange, false);
        this._RouterLink_57_3.ngDoCheck(this, this._el_57, throwOnChange);
        this._vc_33.detectChangesInNestedViews(throwOnChange);
        this._vc_35.detectChangesInNestedViews(throwOnChange);
        valUnwrapper.reset();
        const currVal_69 = import3.inlineInterpolate(1, '\n                    ', valUnwrapper.unwrap(import3.castByValue(this._pipe_currency_0_2, this._pipe_currency_0.transform)(this.context.cart.cartPrice, 'USD', true, '2.2-2')), '\n                ');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_69, currVal_69))) {
            this.renderer.setText(this._text_46, currVal_69);
            this._expr_69 = currVal_69;
        }
        const currVal_71 = (this.context.cart.lines.length == 0);
        if (import3.checkBinding(throwOnChange, this._expr_71, currVal_71)) {
            this.renderer.setElementProperty(this._el_57, 'disabled', currVal_71);
            this._expr_71 = currVal_71;
        }
    }
    destroyInternal() {
        this._vc_33.destroyNestedViews();
        this._vc_35.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 33)) {
            return new View_CartDetailComponent1(this.viewUtils, this, 33, this._anchor_33, this._vc_33);
        }
        if ((nodeIndex == 35)) {
            return new View_CartDetailComponent2(this.viewUtils, this, 35, this._anchor_35, this._vc_35);
        }
        return null;
    }
    handleEvent_54(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_54_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_57(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_57_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
//# sourceMappingURL=cartDetail.component.ngfactory.js.map