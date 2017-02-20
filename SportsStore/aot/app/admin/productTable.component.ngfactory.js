import * as import0 from '../../../app/admin/productTable.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/model/product.repository';
import * as import9 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '@angular/core/src/change_detection/change_detection_util';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/router/src/directives/router_link';
import * as import15 from '../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import16 from '@angular/common/src/pipes/number_pipe';
import * as import17 from '@angular/core/src/linker/template_ref';
import * as import18 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import19 from '@angular/core/src/i18n/tokens';
import * as import20 from '@angular/common/src/directives/ng_for';
export class Wrapper_ProductTableComponent {
    constructor(p0) {
        this._changed = false;
        this.context = new import0.ProductTableComponent(p0);
    }
    ngOnDetach(view, componentView, el) {
    }
    ngOnDestroy() {
    }
    ngDoCheck(view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
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
var renderType_ProductTableComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_ProductTableComponent_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_ProductTableComponent_Host0, renderType_ProductTableComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_ProductTableComponent0(this.viewUtils, this, 0, this._el_0);
        this._ProductTableComponent_0_3 = new Wrapper_ProductTableComponent(this.injectorGet(import8.ProductRepository, this.parentIndex));
        this.compView_0.create(this._ProductTableComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._ProductTableComponent_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.ProductTableComponent) && (0 === requestNodeIndex))) {
            return this._ProductTableComponent_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._ProductTableComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const ProductTableComponentNgFactory = new import7.ComponentFactory('ng-component', View_ProductTableComponent_Host0, import0.ProductTableComponent);
const styles_ProductTableComponent = [];
class View_ProductTableComponent1 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        super(View_ProductTableComponent1, renderType_ProductTableComponent, import5.ViewType.EMBEDDED, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways, declaredViewContainer);
        this._expr_24 = import11.UNINITIALIZED;
        this._expr_25 = import11.UNINITIALIZED;
        this._expr_26 = import11.UNINITIALIZED;
        this._expr_27 = import11.UNINITIALIZED;
        this._arr_29 = import3.pureProxy2((p0, p1) => {
            return [
                p0,
                p1
            ];
        });
    }
    createInternal(rootSelector) {
        this._el_0 = import3.createRenderElement(this.renderer, null, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_1 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_5 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_6 = this.renderer.createText(this._el_5, '', null);
        this._text_7 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_8 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_9 = this.renderer.createText(this._el_8, '', null);
        this._text_10 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_11 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_12 = this.renderer.createText(this._el_11, '', null);
        this._text_13 = this.renderer.createText(this._el_0, '\n            ', null);
        this._el_14 = import3.createRenderElement(this.renderer, this._el_0, 'td', import3.EMPTY_INLINE_ARRAY, null);
        this._text_15 = this.renderer.createText(this._el_14, '\n                ', null);
        this._el_16 = import3.createRenderElement(this.renderer, this._el_14, 'button', new import3.InlineArray2(2, 'class', 'btn btn-sm btn-warning'), null);
        this._RouterLink_16_3 = new import9.Wrapper_RouterLink(this.parentView.parentView.injectorGet(import12.Router, this.parentView.parentIndex), this.parentView.parentView.injectorGet(import13.ActivatedRoute, this.parentView.parentIndex));
        this._text_17 = this.renderer.createText(this._el_16, ' Edit ', null);
        this._text_18 = this.renderer.createText(this._el_14, '\n                ', null);
        this._el_19 = import3.createRenderElement(this.renderer, this._el_14, 'button', new import3.InlineArray2(2, 'class', 'btn btn-sm btn-danger'), null);
        this._text_20 = this.renderer.createText(this._el_19, ' Delete ', null);
        this._text_21 = this.renderer.createText(this._el_14, '\n            ', null);
        this._text_22 = this.renderer.createText(this._el_0, '\n        ', null);
        this._pipe_currency_0_0 = import3.pureProxy4(this.parentView._pipe_currency_0.transform.bind(this.parentView._pipe_currency_0));
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_16, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_16));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_19, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_19));
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
            this._text_13,
            this._el_14,
            this._text_15,
            this._el_16,
            this._text_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._text_22
        ]), [
            disposable_0,
            disposable_1
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import14.RouterLink) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) {
            return this._RouterLink_16_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const valUnwrapper = new import11.ValueUnwrapper();
        const currVal_16_0_0 = this._arr_29('/admin/main/products/edit', this.context.$implicit.id);
        this._RouterLink_16_3.check_routerLink(currVal_16_0_0, throwOnChange, false);
        this._RouterLink_16_3.ngDoCheck(this, this._el_16, throwOnChange);
        const currVal_24 = import3.inlineInterpolate(1, '', this.context.$implicit.id, '');
        if (import3.checkBinding(throwOnChange, this._expr_24, currVal_24)) {
            this.renderer.setText(this._text_3, currVal_24);
            this._expr_24 = currVal_24;
        }
        const currVal_25 = import3.inlineInterpolate(1, '', this.context.$implicit.name, '');
        if (import3.checkBinding(throwOnChange, this._expr_25, currVal_25)) {
            this.renderer.setText(this._text_6, currVal_25);
            this._expr_25 = currVal_25;
        }
        const currVal_26 = import3.inlineInterpolate(1, '', this.context.$implicit.category, '');
        if (import3.checkBinding(throwOnChange, this._expr_26, currVal_26)) {
            this.renderer.setText(this._text_9, currVal_26);
            this._expr_26 = currVal_26;
        }
        valUnwrapper.reset();
        const currVal_27 = import3.inlineInterpolate(1, '', valUnwrapper.unwrap(import3.castByValue(this._pipe_currency_0_0, this.parentView._pipe_currency_0.transform)(this.context.$implicit.price, 'USD', true, '2.2-2')), '');
        if ((valUnwrapper.hasWrappedValue || import3.checkBinding(throwOnChange, this._expr_27, currVal_27))) {
            this.renderer.setText(this._text_12, currVal_27);
            this._expr_27 = currVal_27;
        }
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
    handleEvent_16(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_16_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_19(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.parentView.context.deleteProduct(this.context.$implicit.id) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
var renderType_ProductTableComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_ProductTableComponent, {});
export class View_ProductTableComponent0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_ProductTableComponent0, renderType_ProductTableComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'table', new import3.InlineArray2(2, 'class', 'table table-sm table-striped'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'thead', import3.EMPTY_INLINE_ARRAY, null);
        this._text_3 = this.renderer.createText(this._el_2, '\n        ', null);
        this._el_4 = import3.createRenderElement(this.renderer, this._el_2, 'tr', import3.EMPTY_INLINE_ARRAY, null);
        this._text_5 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_6 = import3.createRenderElement(this.renderer, this._el_4, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(this._el_6, 'ID', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_9 = import3.createRenderElement(this.renderer, this._el_4, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_10 = this.renderer.createText(this._el_9, 'Name', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_4, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_13 = this.renderer.createText(this._el_12, 'Category', null);
        this._text_14 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_4, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_16 = this.renderer.createText(this._el_15, 'Price', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n            ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_4, 'th', import3.EMPTY_INLINE_ARRAY, null);
        this._text_19 = this.renderer.createText(this._el_4, '\n        ', null);
        this._text_20 = this.renderer.createText(this._el_2, '\n    ', null);
        this._text_21 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_0, 'tbody', import3.EMPTY_INLINE_ARRAY, null);
        this._text_23 = this.renderer.createText(this._el_22, '\n        ', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(this._el_22, null);
        this._vc_24 = new import10.ViewContainer(24, 22, this, this._anchor_24);
        this._TemplateRef_24_5 = new import17.TemplateRef_(this, 24, this._anchor_24);
        this._NgFor_24_6 = new import15.Wrapper_NgFor(this._vc_24.vcRef, this._TemplateRef_24_5, this.parentView.injectorGet(import18.IterableDiffers, this.parentIndex), this.ref);
        this._text_25 = this.renderer.createText(this._el_22, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_0, '\n', null);
        this._text_27 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_28 = import3.createRenderElement(this.renderer, parentRenderNode, 'button', new import3.InlineArray4(4, 'class', 'btn btn-primary', 'routerLink', '/admin/main/products/create'), null);
        this._RouterLink_28_3 = new import9.Wrapper_RouterLink(this.parentView.injectorGet(import12.Router, this.parentIndex), this.parentView.injectorGet(import13.ActivatedRoute, this.parentIndex));
        this._text_29 = this.renderer.createText(this._el_28, ' Create New Product ', null);
        this._pipe_currency_0 = new import16.CurrencyPipe(this.parentView.injectorGet(import19.LOCALE_ID, this.parentIndex));
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_28, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_28));
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._el_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29
        ]), [disposable_0]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import17.TemplateRef) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === import20.NgFor) && (24 === requestNodeIndex))) {
            return this._NgFor_24_6.context;
        }
        if (((token === import14.RouterLink) && ((28 <= requestNodeIndex) && (requestNodeIndex <= 29)))) {
            return this._RouterLink_28_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_24_0_0 = this.context.getProducts();
        this._NgFor_24_6.check_ngForOf(currVal_24_0_0, throwOnChange, false);
        this._NgFor_24_6.ngDoCheck(this, this._anchor_24, throwOnChange);
        const currVal_28_0_0 = '/admin/main/products/create';
        this._RouterLink_28_3.check_routerLink(currVal_28_0_0, throwOnChange, false);
        this._RouterLink_28_3.ngDoCheck(this, this._el_28, throwOnChange);
        this._vc_24.detectChangesInNestedViews(throwOnChange);
    }
    destroyInternal() {
        this._vc_24.destroyNestedViews();
    }
    createEmbeddedViewInternal(nodeIndex) {
        if ((nodeIndex == 24)) {
            return new View_ProductTableComponent1(this.viewUtils, this, 24, this._anchor_24, this._vc_24);
        }
        return null;
    }
    handleEvent_28(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_28_3.handleEvent(eventName, $event) && result);
        return result;
    }
}
//# sourceMappingURL=productTable.component.ngfactory.js.map