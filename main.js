(()=>{"use strict";function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var n=function(){function n(t,r){var o=this,i=t.data,u=t.handleCardClick;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,n),e(this,"generateCard",(function(){return o._card=o._getTemplate(),o._cardTitle=o._card.querySelector(".card__title"),o._cardPhoto=o._card.querySelector(".card__photo"),o._deleteButton=o._card.querySelector(".card__delete-button"),o._likeButton=o._card.querySelector(".card__like-button"),o._setEventListeners(),o._cardPhoto.src=o._link,o._cardPhoto.alt=o._name,o._cardTitle.textContent=o._name,o._card})),e(this,"_setEventListeners",(function(){o._likeButton.addEventListener("click",o._likeButtonHandler),o._deleteButton.addEventListener("click",o._deleteButtonHandler),o._cardPhoto.addEventListener("click",(function(){o._handleCardClick(o._link,o._name)}))})),e(this,"_likeButtonHandler",(function(){o._likeButton.classList.toggle("card__like-button_active")})),e(this,"_deleteButtonHandler",(function(){o._card.remove(),o._card=null})),this._name=i.name,this._link=i.link,this._cardTemplateSelector=r,this._handleCardClick=u}var r,o;return r=n,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".card").cloneNode(!0)}}])&&t(r.prototype,o),Object.defineProperty(r,"prototype",{writable:!1}),n}();function r(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var o=function(){function t(e,n){var r=e.items,o=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var e,n;return e=t,(n=[{key:"renderItems",value:function(){var t=this;this._items.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&r(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function i(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var u=function(){function t(e){var n,r,o=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(t){"Escape"===t.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(e)}var e,n;return e=t,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup_opened")||e.target.classList.contains("popup__close"))&&t.close()}))}}])&&i(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}();function a(t){return a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},a(t)}function c(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(){return l="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=s(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},l.apply(this,arguments)}function s(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=_(t)););return t}function p(t,e){return p=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},p(t,e)}function f(t,e){if(e&&("object"===a(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function _(t){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},_(t)}var d=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&p(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=_(r);if(o){var n=_(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return f(this,t)});function u(t,e){var n,r=e.formSubmitHandler;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,t))._formSubmitHandler=r,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._popupForm.querySelectorAll(".popup__input")),n}return e=u,(n=[{key:"_getInputValues",value:function(){var t=this;return this._newValues={},this._inputList.forEach((function(e){t._newValues[e.name]=e.value})),this._newValues}},{key:"setEventListeners",value:function(){var t=this;l(_(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(e){e.preventDefault(),t._formSubmitHandler(t._getInputValues())}))}},{key:"close",value:function(){l(_(u.prototype),"close",this).call(this),this._popupForm.reset()}}])&&c(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(u);function y(t){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y(t)}function h(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function b(){return b="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,n){var r=m(t,e);if(r){var o=Object.getOwnPropertyDescriptor(r,e);return o.get?o.get.call(arguments.length<3?t:n):o.value}},b.apply(this,arguments)}function m(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=g(t)););return t}function v(t,e){return v=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},v(t,e)}function w(t,e){if(e&&("object"===y(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function g(t){return g=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},g(t)}var S=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&v(t,e)}(u,t);var e,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=g(r);if(o){var n=g(this).constructor;t=Reflect.construct(e,arguments,n)}else t=e.apply(this,arguments);return w(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImage=e._popup.querySelector(".popup__image"),e._popupCaption=e._popup.querySelector(".popup__caption"),e}return e=u,(n=[{key:"open",value:function(t){this._popupImage.src=t.link,this._popupCaption.textContent=t.name,this._popupImage.alt=t.name,b(g(u.prototype),"open",this).call(this)}}])&&h(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),u}(u);function k(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var E=function(){function t(e){var n=e.userNameSelector,r=e.aboutUserSelector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(n),this._userAbout=document.querySelector(r)}var e,n;return e=t,(n=[{key:"getUserInfo",value:function(){return this._userInfo={name:this._userName.textContent,about:this._userAbout.textContent},this._userInfo}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.profileName,this._userAbout.textContent=t.profileInfo}}])&&k(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),O={inputSelector:"popup__input",submitButtonSelector:"popup__submit-button",activeButtonClass:"popup__submit-button_active",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},x=document.querySelector(".popup_type_edit-profile"),C=x.querySelector(".popup__form"),j=document.querySelector(".profile__edit-button"),P=x.querySelector(".popup__input_type_name"),L=x.querySelector(".popup__input_type_info"),B=document.querySelector(".popup_type_add-card").querySelector(".popup__form"),I=document.querySelector(".profile__add-button");function q(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}var H=function(){function t(e,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._activeButtonClass=e.activeButtonClass,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._form=n,this._buttonElement=this._form.querySelector(".".concat(this._submitButtonSelector)),this._inputList=Array.from(this._form.querySelectorAll(".".concat(this._inputSelector)))}var e,n;return e=t,(n=[{key:"_showInputError",value:function(t,e){var n=this._form.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),n.textContent=e,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._form.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){if(t.validity.valid)this._hideInputError(t);else{var e=t.validationMessage;this._showInputError(t,e)}}},{key:"_hasInvalidInput",value:function(t){return t.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(t){this._hasInvalidInput(t)?(this._buttonElement.classList.remove(this._activeButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.add(this._activeButtonClass),this._buttonElement.disabled=!1)}},{key:"_setInputEvtListeners",value:function(){var t=this;this._inputList.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState(t._inputList)}))}))}},{key:"enableValidation",value:function(){this._setInputEvtListeners(this._form)}},{key:"setDefaultInputState",value:function(){var t=this;this._inputList.forEach((function(e){t._checkInputValidity(e),t._hideInputError(e)})),this._buttonElement.disabled=!0,this._buttonElement.classList.remove(this._activeButtonClass)}}])&&q(e.prototype,n),Object.defineProperty(e,"prototype",{writable:!1}),t}(),D=new o({items:[{name:"Pear",link:"https://images.unsplash.com/photo-1421167418805-7f170a738eb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Gin & Pomegranate",link:"https://images.unsplash.com/photo-1608885898599-4dadfdceec60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Figs",link:"https://images.unsplash.com/photo-1629911620065-d23e79bec7f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"},{name:"Cup with strawberries",link:"https://images.unsplash.com/photo-1613421341356-33c6452f082f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"},{name:"Oranges",link:"https://images.unsplash.com/photo-1543076659-9380cdf10613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"},{name:"Autumn vibes",link:"https://images.unsplash.com/photo-1634738442108-de3e34983c5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"}].reverse(),renderer:function(t){D.addItem(A(t))}},".elements__cards");D.renderItems();var M=new E({userNameSelector:".profile__title",aboutUserSelector:".profile__subtitle"}),R=new d(".popup_type_edit-profile",{formSubmitHandler:function(t){M.setUserInfo(t),R.close()}});R.setEventListeners();var T=new d(".popup_type_add-card",{formSubmitHandler:function(t){D.addItem(A(t)),T.close()}});T.setEventListeners();var V=new S(".popup_type_zoom-image");function A(t){return new n({data:t,handleCardClick:function(){V.open(t)}},".card-template").generateCard()}V.setEventListeners();var G=new H(O,C),N=new H(O,B);N.enableValidation(),G.enableValidation(),j.addEventListener("click",(function(){var t=M.getUserInfo();P.value=t.name,L.value=t.about,G.setDefaultInputState(R),R.open()})),I.addEventListener("click",(function(){N.setDefaultInputState(T),T.open()}))})();