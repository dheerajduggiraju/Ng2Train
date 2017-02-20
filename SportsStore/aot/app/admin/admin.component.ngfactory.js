import * as import0 from '../../../app/admin/admin.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/constants';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from '../../../app/model/auth.service';
import * as import9 from '@angular/router/src/router';
import * as import10 from '../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import11 from '../../node_modules/@angular/router/src/directives/router_link_active.ngfactory';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '@angular/core/src/linker/view_container';
import * as import14 from '../../node_modules/@angular/router/src/directives/router_outlet.ngfactory';
import * as import15 from '@angular/router/src/router_state';
import * as import16 from '@angular/core/src/linker/element_ref';
import * as import17 from '@angular/router/src/router_outlet_map';
import * as import18 from '@angular/core/src/linker/component_factory_resolver';
import * as import19 from '@angular/router/src/directives/router_link';
import * as import20 from '@angular/router/src/directives/router_link_active';
import * as import21 from '@angular/router/src/directives/router_outlet';
export class Wrapper_AdminComponent {
    constructor(p0, p1) {
        this._changed = false;
        this.context = new import0.AdminComponent(p0, p1);
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
var renderType_AdminComponent_Host = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, [], {});
class View_AdminComponent_Host0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_AdminComponent_Host0, renderType_AdminComponent_Host, import5.ViewType.HOST, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer, 'ng-component', import3.EMPTY_INLINE_ARRAY, rootSelector, null);
        this.compView_0 = new View_AdminComponent0(this.viewUtils, this, 0, this._el_0);
        this._AdminComponent_0_3 = new Wrapper_AdminComponent(this.injectorGet(import8.AuthService, this.parentIndex), this.injectorGet(import9.Router, this.parentIndex));
        this.compView_0.create(this._AdminComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new import7.ComponentRef_(0, this, this._el_0, this._AdminComponent_0_3.context);
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import0.AdminComponent) && (0 === requestNodeIndex))) {
            return this._AdminComponent_0_3.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        this._AdminComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    }
    destroyInternal() {
        this.compView_0.destroy();
    }
    visitRootNodesInternal(cb, ctx) {
        cb(this._el_0, ctx);
    }
}
export const AdminComponentNgFactory = new import7.ComponentFactory('ng-component', View_AdminComponent_Host0, import0.AdminComponent);
const styles_AdminComponent = [];
var renderType_AdminComponent = import3.createRenderComponentType('', 0, import4.ViewEncapsulation.None, styles_AdminComponent, {});
export class View_AdminComponent0 extends import1.AppView {
    constructor(viewUtils, parentView, parentIndex, parentElement) {
        super(View_AdminComponent0, renderType_AdminComponent, import5.ViewType.COMPONENT, viewUtils, parentView, parentIndex, parentElement, import6.ChangeDetectorStatus.CheckAlways);
    }
    createInternal(rootSelector) {
        const parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'navbar bg-info'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._el_2 = import3.createRenderElement(this.renderer, this._el_0, 'a', new import3.InlineArray2(2, 'class', 'navbar-brand'), null);
        this._text_3 = this.renderer.createText(this._el_2, 'SPORTS STORE Admin', null);
        this._text_4 = this.renderer.createText(this._el_0, '\n', null);
        this._text_5 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_6 = import3.createRenderElement(this.renderer, parentRenderNode, 'br', import3.EMPTY_INLINE_ARRAY, null);
        this._text_7 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_8 = import3.createRenderElement(this.renderer, parentRenderNode, 'div', new import3.InlineArray2(2, 'class', 'row'), null);
        this._text_9 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_10 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'col-md-3'), null);
        this._text_11 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_12 = import3.createRenderElement(this.renderer, this._el_10, 'button', new import3.InlineArray8(6, 'class', 'btn btn-outline-info btn-block', 'routerLink', '/admin/main/products', 'routerLinkActive', 'active'), null);
        this._RouterLink_12_3 = new import10.Wrapper_RouterLink(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import15.ActivatedRoute, this.parentIndex));
        this._RouterLinkActive_12_4 = new import11.Wrapper_RouterLinkActive(this.parentView.injectorGet(import9.Router, this.parentIndex), new import16.ElementRef(this._el_12), this.renderer, this.ref);
        this._query_RouterLink_12_0 = new import12.QueryList();
        this._query_RouterLinkWithHref_12_1 = new import12.QueryList();
        this._text_13 = this.renderer.createText(this._el_12, ' Products', null);
        this._text_14 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_15 = import3.createRenderElement(this.renderer, this._el_10, 'button', new import3.InlineArray8(6, 'class', 'btn btn-outline-info btn-block', 'routerLink', '/admin/main/orders', 'routerLinkActive', 'active'), null);
        this._RouterLink_15_3 = new import10.Wrapper_RouterLink(this.parentView.injectorGet(import9.Router, this.parentIndex), this.parentView.injectorGet(import15.ActivatedRoute, this.parentIndex));
        this._RouterLinkActive_15_4 = new import11.Wrapper_RouterLinkActive(this.parentView.injectorGet(import9.Router, this.parentIndex), new import16.ElementRef(this._el_15), this.renderer, this.ref);
        this._query_RouterLink_15_0 = new import12.QueryList();
        this._query_RouterLinkWithHref_15_1 = new import12.QueryList();
        this._text_16 = this.renderer.createText(this._el_15, ' Orders', null);
        this._text_17 = this.renderer.createText(this._el_10, '\n        ', null);
        this._el_18 = import3.createRenderElement(this.renderer, this._el_10, 'button', new import3.InlineArray2(2, 'class', 'btn btn-outline-danger btn-block'), null);
        this._text_19 = this.renderer.createText(this._el_18, ' Logout ', null);
        this._text_20 = this.renderer.createText(this._el_10, '\n    ', null);
        this._text_21 = this.renderer.createText(this._el_8, '\n    ', null);
        this._el_22 = import3.createRenderElement(this.renderer, this._el_8, 'div', new import3.InlineArray2(2, 'class', 'col-md-9'), null);
        this._text_23 = this.renderer.createText(this._el_22, '\n        ', null);
        this._el_24 = import3.createRenderElement(this.renderer, this._el_22, 'router-outlet', import3.EMPTY_INLINE_ARRAY, null);
        this._vc_24 = new import13.ViewContainer(24, 22, this, this._el_24);
        this._RouterOutlet_24_5 = new import14.Wrapper_RouterOutlet(this.parentView.injectorGet(import17.RouterOutletMap, this.parentIndex), this._vc_24.vcRef, this.parentView.injectorGet(import18.ComponentFactoryResolver, this.parentIndex), null);
        this._text_25 = this.renderer.createText(this._el_22, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_8, '\n', null);
        var disposable_0 = import3.subscribeToRenderElement(this, this._el_12, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_12));
        var disposable_1 = import3.subscribeToRenderElement(this, this._el_15, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_15));
        var disposable_2 = import3.subscribeToRenderElement(this, this._el_18, new import3.InlineArray2(2, 'click', null), this.eventHandler(this.handleEvent_18));
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
            this._el_10,
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
            this._el_24,
            this._text_25,
            this._text_26
        ]), [
            disposable_0,
            disposable_1,
            disposable_2
        ]);
        return null;
    }
    injectorGetInternal(token, requestNodeIndex, notFoundResult) {
        if (((token === import19.RouterLink) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._RouterLink_12_3.context;
        }
        if (((token === import20.RouterLinkActive) && ((12 <= requestNodeIndex) && (requestNodeIndex <= 13)))) {
            return this._RouterLinkActive_12_4.context;
        }
        if (((token === import19.RouterLink) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._RouterLink_15_3.context;
        }
        if (((token === import20.RouterLinkActive) && ((15 <= requestNodeIndex) && (requestNodeIndex <= 16)))) {
            return this._RouterLinkActive_15_4.context;
        }
        if (((token === import21.RouterOutlet) && (24 === requestNodeIndex))) {
            return this._RouterOutlet_24_5.context;
        }
        return notFoundResult;
    }
    detectChangesInternal(throwOnChange) {
        const currVal_12_0_0 = '/admin/main/products';
        this._RouterLink_12_3.check_routerLink(currVal_12_0_0, throwOnChange, false);
        this._RouterLink_12_3.ngDoCheck(this, this._el_12, throwOnChange);
        const currVal_12_1_0 = 'active';
        this._RouterLinkActive_12_4.check_routerLinkActive(currVal_12_1_0, throwOnChange, false);
        this._RouterLinkActive_12_4.ngDoCheck(this, this._el_12, throwOnChange);
        const currVal_15_0_0 = '/admin/main/orders';
        this._RouterLink_15_3.check_routerLink(currVal_15_0_0, throwOnChange, false);
        this._RouterLink_15_3.ngDoCheck(this, this._el_15, throwOnChange);
        const currVal_15_1_0 = 'active';
        this._RouterLinkActive_15_4.check_routerLinkActive(currVal_15_1_0, throwOnChange, false);
        this._RouterLinkActive_15_4.ngDoCheck(this, this._el_15, throwOnChange);
        this._RouterOutlet_24_5.ngDoCheck(this, this._el_24, throwOnChange);
        this._vc_24.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._query_RouterLink_12_0.dirty) {
                this._query_RouterLink_12_0.reset([this._RouterLink_12_3.context]);
                this._RouterLinkActive_12_4.context.links = this._query_RouterLink_12_0;
                this._query_RouterLink_12_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_12_1.dirty) {
                this._query_RouterLinkWithHref_12_1.reset([]);
                this._RouterLinkActive_12_4.context.linksWithHrefs = this._query_RouterLinkWithHref_12_1;
                this._query_RouterLinkWithHref_12_1.notifyOnChanges();
            }
            if (this._query_RouterLink_15_0.dirty) {
                this._query_RouterLink_15_0.reset([this._RouterLink_15_3.context]);
                this._RouterLinkActive_15_4.context.links = this._query_RouterLink_15_0;
                this._query_RouterLink_15_0.notifyOnChanges();
            }
            if (this._query_RouterLinkWithHref_15_1.dirty) {
                this._query_RouterLinkWithHref_15_1.reset([]);
                this._RouterLinkActive_15_4.context.linksWithHrefs = this._query_RouterLinkWithHref_15_1;
                this._query_RouterLinkWithHref_15_1.notifyOnChanges();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_12_4.context.ngAfterContentInit();
            }
            if ((this.numberOfChecks === 0)) {
                this._RouterLinkActive_15_4.context.ngAfterContentInit();
            }
        }
    }
    destroyInternal() {
        this._vc_24.destroyNestedViews();
        this._RouterLinkActive_12_4.ngOnDestroy();
        this._RouterLinkActive_15_4.ngOnDestroy();
        this._RouterOutlet_24_5.ngOnDestroy();
    }
    handleEvent_12(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_12_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_15(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._RouterLink_15_3.handleEvent(eventName, $event) && result);
        return result;
    }
    handleEvent_18(eventName, $event) {
        this.markPathToRootAsCheckOnce();
        var result = true;
        if ((eventName == 'click')) {
            const pd_sub_0 = (this.context.logout() !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    }
}
//# sourceMappingURL=admin.component.ngfactory.js.map