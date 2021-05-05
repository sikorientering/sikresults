import{_ as t,a as n,M as i,b as e}from"./p-1236279c.js";import{a as r}from"./p-3f820cf2.js";import{m as u}from"./p-769825a9.js";import{M as s,a as o}from"./p-41dcda30.js";import{M as c,a as h}from"./p-e5abdcd5.js";
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */var f={LINE_RIPPLE_ACTIVE:"mdc-line-ripple--active",LINE_RIPPLE_DEACTIVATING:"mdc-line-ripple--deactivating"},a=function(i){function e(t){var r=i.call(this,n({},e.defaultAdapter,t))||this;return r.transitionEndHandler_=function(t){return r.handleTransitionEnd(t)},r}return t(e,i),Object.defineProperty(e,"cssClasses",{get:function(){return f},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setStyle:function(){},registerEventHandler:function(){},deregisterEventHandler:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){this.adapter_.registerEventHandler("transitionend",this.transitionEndHandler_)},e.prototype.destroy=function(){this.adapter_.deregisterEventHandler("transitionend",this.transitionEndHandler_)},e.prototype.activate=function(){this.adapter_.removeClass(f.LINE_RIPPLE_DEACTIVATING),this.adapter_.addClass(f.LINE_RIPPLE_ACTIVE)},e.prototype.setRippleCenter=function(t){this.adapter_.setStyle("transform-origin",t+"px center")},e.prototype.deactivate=function(){this.adapter_.addClass(f.LINE_RIPPLE_DEACTIVATING)},e.prototype.handleTransitionEnd=function(t){var n=this.adapter_.hasClass(f.LINE_RIPPLE_DEACTIVATING);"opacity"===t.propertyName&&n&&(this.adapter_.removeClass(f.LINE_RIPPLE_ACTIVE),this.adapter_.removeClass(f.LINE_RIPPLE_DEACTIVATING))},e}(i),l=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return t(i,n),i.attachTo=function(t){return new i(t)},i.prototype.activate=function(){this.foundation_.activate()},i.prototype.deactivate=function(){this.foundation_.deactivate()},i.prototype.setRippleCenter=function(t){this.foundation_.setRippleCenter(t)},i.prototype.getDefaultFoundation=function(){var t=this;return new a({addClass:function(n){return t.root_.classList.add(n)},removeClass:function(n){return t.root_.classList.remove(n)},hasClass:function(n){return t.root_.classList.contains(n)},setStyle:function(n,i){return t.root_.style.setProperty(n,i)},registerEventHandler:function(n,i){return t.listen(n,i)},deregisterEventHandler:function(n,i){return t.unlisten(n,i)}})},i}(e),d={NOTCH_ELEMENT_SELECTOR:".mdc-notched-outline__notch"},b={NOTCH_ELEMENT_PADDING:8},g={NO_LABEL:"mdc-notched-outline--no-label",OUTLINE_NOTCHED:"mdc-notched-outline--notched",OUTLINE_UPGRADED:"mdc-notched-outline--upgraded"},m=function(i){function e(t){return i.call(this,n({},e.defaultAdapter,t))||this}return t(e,i),Object.defineProperty(e,"strings",{get:function(){return d},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return g},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return b},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},setNotchWidthProperty:function(){},removeNotchWidthProperty:function(){}}},enumerable:!0,configurable:!0}),e.prototype.notch=function(t){var n=e.cssClasses.OUTLINE_NOTCHED;t>0&&(t+=b.NOTCH_ELEMENT_PADDING),this.adapter_.setNotchWidthProperty(t),this.adapter_.addClass(n)},e.prototype.closeNotch=function(){this.adapter_.removeClass(e.cssClasses.OUTLINE_NOTCHED),this.adapter_.removeNotchWidthProperty()},e}(i),v=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return t(i,n),i.attachTo=function(t){return new i(t)},i.prototype.initialSyncWithDOM=function(){this.notchElement_=this.root_.querySelector(d.NOTCH_ELEMENT_SELECTOR);var t=this.root_.querySelector("."+s.cssClasses.ROOT);t?(t.style.transitionDuration="0s",this.root_.classList.add(g.OUTLINE_UPGRADED),requestAnimationFrame((function(){t.style.transitionDuration=""}))):this.root_.classList.add(g.NO_LABEL)},i.prototype.notch=function(t){this.foundation_.notch(t)},i.prototype.closeNotch=function(){this.foundation_.closeNotch()},i.prototype.getDefaultFoundation=function(){var t=this;return new m({addClass:function(n){return t.root_.classList.add(n)},removeClass:function(n){return t.root_.classList.remove(n)},setNotchWidthProperty:function(n){return t.notchElement_.style.setProperty("width",n+"px")},removeNotchWidthProperty:function(){return t.notchElement_.style.removeProperty("width")}})},i}(e),O={ROOT:"mdc-text-field-character-counter"},E={ROOT_SELECTOR:"."+O.ROOT},p=function(i){function e(t){return i.call(this,n({},e.defaultAdapter,t))||this}return t(e,i),Object.defineProperty(e,"cssClasses",{get:function(){return O},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return E},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{setContent:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setCounterValue=function(t,n){t=Math.min(t,n),this.adapter_.setContent(t+" / "+n)},e}(i),C=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return t(i,n),i.attachTo=function(t){return new i(t)},Object.defineProperty(i.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),i.prototype.getDefaultFoundation=function(){var t=this;return new p({setContent:function(n){t.root_.textContent=n}})},i}(e),L={ARIA_CONTROLS:"aria-controls",ICON_SELECTOR:".mdc-text-field__icon",INPUT_SELECTOR:".mdc-text-field__input",LABEL_SELECTOR:".mdc-floating-label",LINE_RIPPLE_SELECTOR:".mdc-line-ripple",OUTLINE_SELECTOR:".mdc-notched-outline"},I={DENSE:"mdc-text-field--dense",DISABLED:"mdc-text-field--disabled",FOCUSED:"mdc-text-field--focused",FULLWIDTH:"mdc-text-field--fullwidth",HELPER_LINE:"mdc-text-field-helper-line",INVALID:"mdc-text-field--invalid",NO_LABEL:"mdc-text-field--no-label",OUTLINED:"mdc-text-field--outlined",ROOT:"mdc-text-field",TEXTAREA:"mdc-text-field--textarea",WITH_LEADING_ICON:"mdc-text-field--with-leading-icon",WITH_TRAILING_ICON:"mdc-text-field--with-trailing-icon"},T={DENSE_LABEL_SCALE:.923,LABEL_SCALE:.75},A=["pattern","min","max","required","step","minlength","maxlength"],x=["color","date","datetime-local","month","range","time","week"],_=["mousedown","touchstart"],j=["click","keydown"],N=function(i){function e(t,r){void 0===r&&(r={});var u=i.call(this,n({},e.defaultAdapter,t))||this;return u.isFocused_=!1,u.receivedUserInput_=!1,u.isValid_=!0,u.useNativeValidation_=!0,u.helperText_=r.helperText,u.characterCounter_=r.characterCounter,u.leadingIcon_=r.leadingIcon,u.trailingIcon_=r.trailingIcon,u.inputFocusHandler_=function(){return u.activateFocus()},u.inputBlurHandler_=function(){return u.deactivateFocus()},u.inputInputHandler_=function(){return u.handleInput()},u.setPointerXOffset_=function(t){return u.setTransformOrigin(t)},u.textFieldInteractionHandler_=function(){return u.handleTextFieldInteraction()},u.validationAttributeChangeHandler_=function(t){return u.handleValidationAttributeChange(t)},u}return t(e,i),Object.defineProperty(e,"cssClasses",{get:function(){return I},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return L},enumerable:!0,configurable:!0}),Object.defineProperty(e,"numbers",{get:function(){return T},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldAlwaysFloat_",{get:function(){var t=this.getNativeInput_().type;return x.indexOf(t)>=0},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldFloat",{get:function(){return this.shouldAlwaysFloat_||this.isFocused_||!!this.getValue()||this.isBadInput_()},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"shouldShake",{get:function(){return!this.isFocused_&&!this.isValid()&&!!this.getValue()},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!0},registerTextFieldInteractionHandler:function(){},deregisterTextFieldInteractionHandler:function(){},registerInputInteractionHandler:function(){},deregisterInputInteractionHandler:function(){},registerValidationAttributeChangeHandler:function(){return new MutationObserver((function(){}))},deregisterValidationAttributeChangeHandler:function(){},getNativeInput:function(){return null},isFocused:function(){return!1},activateLineRipple:function(){},deactivateLineRipple:function(){},setLineRippleTransformOrigin:function(){},shakeLabel:function(){},floatLabel:function(){},hasLabel:function(){return!1},getLabelWidth:function(){return 0},hasOutline:function(){return!1},notchOutline:function(){},closeOutline:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.adapter_.isFocused()?this.inputFocusHandler_():this.adapter_.hasLabel()&&this.shouldFloat&&(this.notchOutline(!0),this.adapter_.floatLabel(!0)),this.adapter_.registerInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.registerInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.registerInputInteractionHandler("input",this.inputInputHandler_),_.forEach((function(n){t.adapter_.registerInputInteractionHandler(n,t.setPointerXOffset_)})),j.forEach((function(n){t.adapter_.registerTextFieldInteractionHandler(n,t.textFieldInteractionHandler_)})),this.validationObserver_=this.adapter_.registerValidationAttributeChangeHandler(this.validationAttributeChangeHandler_),this.setCharacterCounter_(this.getValue().length)},e.prototype.destroy=function(){var t=this;this.adapter_.deregisterInputInteractionHandler("focus",this.inputFocusHandler_),this.adapter_.deregisterInputInteractionHandler("blur",this.inputBlurHandler_),this.adapter_.deregisterInputInteractionHandler("input",this.inputInputHandler_),_.forEach((function(n){t.adapter_.deregisterInputInteractionHandler(n,t.setPointerXOffset_)})),j.forEach((function(n){t.adapter_.deregisterTextFieldInteractionHandler(n,t.textFieldInteractionHandler_)})),this.adapter_.deregisterValidationAttributeChangeHandler(this.validationObserver_)},e.prototype.handleTextFieldInteraction=function(){var t=this.adapter_.getNativeInput();t&&t.disabled||(this.receivedUserInput_=!0)},e.prototype.handleValidationAttributeChange=function(t){var n=this;t.some((function(t){return A.indexOf(t)>-1&&(n.styleValidity_(!0),!0)})),t.indexOf("maxlength")>-1&&this.setCharacterCounter_(this.getValue().length)},e.prototype.notchOutline=function(t){if(this.adapter_.hasOutline())if(t){var n=this.adapter_.hasClass(I.DENSE)?T.DENSE_LABEL_SCALE:T.LABEL_SCALE,i=this.adapter_.getLabelWidth()*n;this.adapter_.notchOutline(i)}else this.adapter_.closeOutline()},e.prototype.activateFocus=function(){this.isFocused_=!0,this.styleFocused_(this.isFocused_),this.adapter_.activateLineRipple(),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.helperText_&&this.helperText_.showToScreenReader()},e.prototype.setTransformOrigin=function(t){var n=t.touches,i=n?n[0]:t,e=i.target.getBoundingClientRect();this.adapter_.setLineRippleTransformOrigin(i.clientX-e.left)},e.prototype.handleInput=function(){this.autoCompleteFocus(),this.setCharacterCounter_(this.getValue().length)},e.prototype.autoCompleteFocus=function(){this.receivedUserInput_||this.activateFocus()},e.prototype.deactivateFocus=function(){this.isFocused_=!1,this.adapter_.deactivateLineRipple();var t=this.isValid();this.styleValidity_(t),this.styleFocused_(this.isFocused_),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake)),this.shouldFloat||(this.receivedUserInput_=!1)},e.prototype.getValue=function(){return this.getNativeInput_().value},e.prototype.setValue=function(t){this.getValue()!==t&&(this.getNativeInput_().value=t),this.setCharacterCounter_(t.length);var n=this.isValid();this.styleValidity_(n),this.adapter_.hasLabel()&&(this.notchOutline(this.shouldFloat),this.adapter_.floatLabel(this.shouldFloat),this.adapter_.shakeLabel(this.shouldShake))},e.prototype.isValid=function(){return this.useNativeValidation_?this.isNativeInputValid_():this.isValid_},e.prototype.setValid=function(t){this.isValid_=t,this.styleValidity_(t);var n=!t&&!this.isFocused_&&!!this.getValue();this.adapter_.hasLabel()&&this.adapter_.shakeLabel(n)},e.prototype.setUseNativeValidation=function(t){this.useNativeValidation_=t},e.prototype.isDisabled=function(){return this.getNativeInput_().disabled},e.prototype.setDisabled=function(t){this.getNativeInput_().disabled=t,this.styleDisabled_(t)},e.prototype.setHelperTextContent=function(t){this.helperText_&&this.helperText_.setContent(t)},e.prototype.setLeadingIconAriaLabel=function(t){this.leadingIcon_&&this.leadingIcon_.setAriaLabel(t)},e.prototype.setLeadingIconContent=function(t){this.leadingIcon_&&this.leadingIcon_.setContent(t)},e.prototype.setTrailingIconAriaLabel=function(t){this.trailingIcon_&&this.trailingIcon_.setAriaLabel(t)},e.prototype.setTrailingIconContent=function(t){this.trailingIcon_&&this.trailingIcon_.setContent(t)},e.prototype.setCharacterCounter_=function(t){if(this.characterCounter_){var n=this.getNativeInput_().maxLength;if(-1===n)throw new Error("MDCTextFieldFoundation: Expected maxlength html property on text input or textarea.");this.characterCounter_.setCounterValue(t,n)}},e.prototype.isBadInput_=function(){return this.getNativeInput_().validity.badInput||!1},e.prototype.isNativeInputValid_=function(){return this.getNativeInput_().validity.valid},e.prototype.styleValidity_=function(t){var n=e.cssClasses.INVALID;t?this.adapter_.removeClass(n):this.adapter_.addClass(n),this.helperText_&&this.helperText_.setValidity(t)},e.prototype.styleFocused_=function(t){var n=e.cssClasses.FOCUSED;t?this.adapter_.addClass(n):this.adapter_.removeClass(n)},e.prototype.styleDisabled_=function(t){var n=e.cssClasses,i=n.DISABLED,r=n.INVALID;t?(this.adapter_.addClass(i),this.adapter_.removeClass(r)):this.adapter_.removeClass(i),this.leadingIcon_&&this.leadingIcon_.setDisabled(t),this.trailingIcon_&&this.trailingIcon_.setDisabled(t)},e.prototype.getNativeInput_=function(){return(this.adapter_?this.adapter_.getNativeInput():null)||{disabled:!1,maxLength:-1,type:"input",validity:{badInput:!1,valid:!0},value:""}},e}(i),R={HELPER_TEXT_PERSISTENT:"mdc-text-field-helper-text--persistent",HELPER_TEXT_VALIDATION_MSG:"mdc-text-field-helper-text--validation-msg",ROOT:"mdc-text-field-helper-text"},w={ARIA_HIDDEN:"aria-hidden",ROLE:"role",ROOT_SELECTOR:"."+R.ROOT},H=function(i){function e(t){return i.call(this,n({},e.defaultAdapter,t))||this}return t(e,i),Object.defineProperty(e,"cssClasses",{get:function(){return R},enumerable:!0,configurable:!0}),Object.defineProperty(e,"strings",{get:function(){return w},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{addClass:function(){},removeClass:function(){},hasClass:function(){return!1},setAttr:function(){},removeAttr:function(){},setContent:function(){}}},enumerable:!0,configurable:!0}),e.prototype.setContent=function(t){this.adapter_.setContent(t)},e.prototype.setPersistent=function(t){t?this.adapter_.addClass(R.HELPER_TEXT_PERSISTENT):this.adapter_.removeClass(R.HELPER_TEXT_PERSISTENT)},e.prototype.setValidation=function(t){t?this.adapter_.addClass(R.HELPER_TEXT_VALIDATION_MSG):this.adapter_.removeClass(R.HELPER_TEXT_VALIDATION_MSG)},e.prototype.showToScreenReader=function(){this.adapter_.removeAttr(w.ARIA_HIDDEN)},e.prototype.setValidity=function(t){var n=this.adapter_.hasClass(R.HELPER_TEXT_PERSISTENT),i=this.adapter_.hasClass(R.HELPER_TEXT_VALIDATION_MSG)&&!t;i?this.adapter_.setAttr(w.ROLE,"alert"):this.adapter_.removeAttr(w.ROLE),n||i||this.hide_()},e.prototype.hide_=function(){this.adapter_.setAttr(w.ARIA_HIDDEN,"true")},e}(i),S=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return t(i,n),i.attachTo=function(t){return new i(t)},Object.defineProperty(i.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),i.prototype.getDefaultFoundation=function(){var t=this;return new H({addClass:function(n){return t.root_.classList.add(n)},removeClass:function(n){return t.root_.classList.remove(n)},hasClass:function(n){return t.root_.classList.contains(n)},setAttr:function(n,i){return t.root_.setAttribute(n,i)},removeAttr:function(n){return t.root_.removeAttribute(n)},setContent:function(n){t.root_.textContent=n}})},i}(e),D={ICON_EVENT:"MDCTextField:icon",ICON_ROLE:"button"},P={ROOT:"mdc-text-field__icon"},y=["click","keydown"],F=function(i){function e(t){var r=i.call(this,n({},e.defaultAdapter,t))||this;return r.savedTabIndex_=null,r.interactionHandler_=function(t){return r.handleInteraction(t)},r}return t(e,i),Object.defineProperty(e,"strings",{get:function(){return D},enumerable:!0,configurable:!0}),Object.defineProperty(e,"cssClasses",{get:function(){return P},enumerable:!0,configurable:!0}),Object.defineProperty(e,"defaultAdapter",{get:function(){return{getAttr:function(){return null},setAttr:function(){},removeAttr:function(){},setContent:function(){},registerInteractionHandler:function(){},deregisterInteractionHandler:function(){},notifyIconAction:function(){}}},enumerable:!0,configurable:!0}),e.prototype.init=function(){var t=this;this.savedTabIndex_=this.adapter_.getAttr("tabindex"),y.forEach((function(n){t.adapter_.registerInteractionHandler(n,t.interactionHandler_)}))},e.prototype.destroy=function(){var t=this;y.forEach((function(n){t.adapter_.deregisterInteractionHandler(n,t.interactionHandler_)}))},e.prototype.setDisabled=function(t){this.savedTabIndex_&&(t?(this.adapter_.setAttr("tabindex","-1"),this.adapter_.removeAttr("role")):(this.adapter_.setAttr("tabindex",this.savedTabIndex_),this.adapter_.setAttr("role",D.ICON_ROLE)))},e.prototype.setAriaLabel=function(t){this.adapter_.setAttr("aria-label",t)},e.prototype.setContent=function(t){this.adapter_.setContent(t)},e.prototype.handleInteraction=function(t){("click"===t.type||"Enter"===t.key||13===t.keyCode)&&this.adapter_.notifyIconAction()},e}(i),M=function(n){function i(){return null!==n&&n.apply(this,arguments)||this}return t(i,n),i.attachTo=function(t){return new i(t)},Object.defineProperty(i.prototype,"foundation",{get:function(){return this.foundation_},enumerable:!0,configurable:!0}),i.prototype.getDefaultFoundation=function(){var t=this;return new F({getAttr:function(n){return t.root_.getAttribute(n)},setAttr:function(n,i){return t.root_.setAttribute(n,i)},removeAttr:function(n){return t.root_.removeAttribute(n)},setContent:function(n){t.root_.textContent=n},registerInteractionHandler:function(n,i){return t.listen(n,i)},deregisterInteractionHandler:function(n,i){return t.unlisten(n,i)},notifyIconAction:function(){return t.emit(F.strings.ICON_EVENT,{},!0)}})},i}(e),V=function(i){function e(){return null!==i&&i.apply(this,arguments)||this}return t(e,i),e.attachTo=function(t){return new e(t)},e.prototype.initialize=function(t,n,i,e,r,u,s){void 0===t&&(t=function(t,n){return new c(t,n)}),void 0===n&&(n=function(t){return new l(t)}),void 0===i&&(i=function(t){return new S(t)}),void 0===e&&(e=function(t){return new C(t)}),void 0===r&&(r=function(t){return new M(t)}),void 0===u&&(u=function(t){return new o(t)}),void 0===s&&(s=function(t){return new v(t)}),this.input_=this.root_.querySelector(L.INPUT_SELECTOR);var h=this.root_.querySelector(L.LABEL_SELECTOR);this.label_=h?u(h):null;var f=this.root_.querySelector(L.LINE_RIPPLE_SELECTOR);this.lineRipple_=f?n(f):null;var a=this.root_.querySelector(L.OUTLINE_SELECTOR);this.outline_=a?s(a):null;var d=H.strings,b=this.root_.nextElementSibling,g=b&&b.classList.contains(I.HELPER_LINE),m=g&&b&&b.querySelector(d.ROOT_SELECTOR);this.helperText_=m?i(m):null;var O=p.strings,E=this.root_.querySelector(O.ROOT_SELECTOR);!E&&g&&b&&(E=b.querySelector(O.ROOT_SELECTOR)),this.characterCounter_=E?e(E):null,this.leadingIcon_=null,this.trailingIcon_=null;var T=this.root_.querySelectorAll(L.ICON_SELECTOR);T.length>0&&(T.length>1?(this.leadingIcon_=r(T[0]),this.trailingIcon_=r(T[1])):this.root_.classList.contains(I.WITH_LEADING_ICON)?this.leadingIcon_=r(T[0]):this.trailingIcon_=r(T[0])),this.ripple=this.createRipple_(t)},e.prototype.destroy=function(){this.ripple&&this.ripple.destroy(),this.lineRipple_&&this.lineRipple_.destroy(),this.helperText_&&this.helperText_.destroy(),this.characterCounter_&&this.characterCounter_.destroy(),this.leadingIcon_&&this.leadingIcon_.destroy(),this.trailingIcon_&&this.trailingIcon_.destroy(),this.label_&&this.label_.destroy(),this.outline_&&this.outline_.destroy(),i.prototype.destroy.call(this)},e.prototype.initialSyncWithDOM=function(){this.disabled=this.input_.disabled},Object.defineProperty(e.prototype,"value",{get:function(){return this.foundation_.getValue()},set:function(t){this.foundation_.setValue(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"disabled",{get:function(){return this.foundation_.isDisabled()},set:function(t){this.foundation_.setDisabled(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"valid",{get:function(){return this.foundation_.isValid()},set:function(t){this.foundation_.setValid(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"required",{get:function(){return this.input_.required},set:function(t){this.input_.required=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"pattern",{get:function(){return this.input_.pattern},set:function(t){this.input_.pattern=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"minLength",{get:function(){return this.input_.minLength},set:function(t){this.input_.minLength=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"maxLength",{get:function(){return this.input_.maxLength},set:function(t){t<0?this.input_.removeAttribute("maxLength"):this.input_.maxLength=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"min",{get:function(){return this.input_.min},set:function(t){this.input_.min=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"max",{get:function(){return this.input_.max},set:function(t){this.input_.max=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"step",{get:function(){return this.input_.step},set:function(t){this.input_.step=t},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"helperTextContent",{set:function(t){this.foundation_.setHelperTextContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconAriaLabel",{set:function(t){this.foundation_.setLeadingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"leadingIconContent",{set:function(t){this.foundation_.setLeadingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconAriaLabel",{set:function(t){this.foundation_.setTrailingIconAriaLabel(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"trailingIconContent",{set:function(t){this.foundation_.setTrailingIconContent(t)},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"useNativeValidation",{set:function(t){this.foundation_.setUseNativeValidation(t)},enumerable:!0,configurable:!0}),e.prototype.focus=function(){this.input_.focus()},e.prototype.layout=function(){this.foundation_.notchOutline(this.foundation_.shouldFloat)},e.prototype.getDefaultFoundation=function(){var t=n({},this.getRootAdapterMethods_(),this.getInputAdapterMethods_(),this.getLabelAdapterMethods_(),this.getLineRippleAdapterMethods_(),this.getOutlineAdapterMethods_());return new N(t,this.getFoundationMap_())},e.prototype.getRootAdapterMethods_=function(){var t=this;return{addClass:function(n){return t.root_.classList.add(n)},removeClass:function(n){return t.root_.classList.remove(n)},hasClass:function(n){return t.root_.classList.contains(n)},registerTextFieldInteractionHandler:function(n,i){return t.listen(n,i)},deregisterTextFieldInteractionHandler:function(n,i){return t.unlisten(n,i)},registerValidationAttributeChangeHandler:function(n){var i=new MutationObserver((function(t){return n(function(t){return t.map((function(t){return t.attributeName})).filter((function(t){return t}))}(t))}));return i.observe(t.input_,{attributes:!0}),i},deregisterValidationAttributeChangeHandler:function(t){return t.disconnect()}}},e.prototype.getInputAdapterMethods_=function(){var t=this;return{getNativeInput:function(){return t.input_},isFocused:function(){return document.activeElement===t.input_},registerInputInteractionHandler:function(n,i){return t.input_.addEventListener(n,i,r())},deregisterInputInteractionHandler:function(n,i){return t.input_.removeEventListener(n,i,r())}}},e.prototype.getLabelAdapterMethods_=function(){var t=this;return{floatLabel:function(n){return t.label_&&t.label_.float(n)},getLabelWidth:function(){return t.label_?t.label_.getWidth():0},hasLabel:function(){return Boolean(t.label_)},shakeLabel:function(n){return t.label_&&t.label_.shake(n)}}},e.prototype.getLineRippleAdapterMethods_=function(){var t=this;return{activateLineRipple:function(){t.lineRipple_&&t.lineRipple_.activate()},deactivateLineRipple:function(){t.lineRipple_&&t.lineRipple_.deactivate()},setLineRippleTransformOrigin:function(n){t.lineRipple_&&t.lineRipple_.setRippleCenter(n)}}},e.prototype.getOutlineAdapterMethods_=function(){var t=this;return{closeOutline:function(){return t.outline_&&t.outline_.closeNotch()},hasOutline:function(){return Boolean(t.outline_)},notchOutline:function(n){return t.outline_&&t.outline_.notch(n)}}},e.prototype.getFoundationMap_=function(){return{characterCounter:this.characterCounter_?this.characterCounter_.foundation:void 0,helperText:this.helperText_?this.helperText_.foundation:void 0,leadingIcon:this.leadingIcon_?this.leadingIcon_.foundation:void 0,trailingIcon:this.trailingIcon_?this.trailingIcon_.foundation:void 0}},e.prototype.createRipple_=function(t){var i=this,e=this.root_.classList.contains(I.TEXTAREA),s=this.root_.classList.contains(I.OUTLINED);if(e||s)return null;var o=n({},c.createAdapter(this),{isSurfaceActive:function(){return u(i.input_,":active")},registerInteractionHandler:function(t,n){return i.input_.addEventListener(t,n,r())},deregisterInteractionHandler:function(t,n){return i.input_.removeEventListener(t,n,r())}});return t(this.root_,new h(o))},e}(e);
/**
 * @license
 * Copyright 2018 Google Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */export{V as M}