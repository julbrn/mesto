(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e){var n=e.serverUrl,r=e.headers;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this._headers=r,this._serverUrl=n}var n,r;return n=t,(r=[{key:"_checkServerResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка: ".concat(e.status))}},{key:"downloadInitialCards",value:function(){return fetch("".concat(this._serverUrl,"/cards"),{method:"GET",headers:this._headers}).then(this._checkServerResponse)}},{key:"uploadCard",value:function(e){return fetch("".concat(this._serverUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:e.name,link:e.link})}).then(this._checkServerResponse)}},{key:"deleteCardfromServer",value:function(e){return fetch("".concat(this._serverUrl,"/cards/").concat(e),{method:"DELETE",headers:this._headers}).then(this._checkServerResponse)}},{key:"sendCardLike",value:function(e){return fetch("".concat(this._serverUrl,"/cards/").concat(e._id,"/likes"),{method:"PUT",headers:this._headers}).then(this._checkServerResponse)}},{key:"deleteCardLike",value:function(e){return fetch("".concat(this._serverUrl,"/cards/likes/").concat(e._id),{method:"DELETE",headers:this._headers}).then(this._checkServerResponse)}},{key:"downloadUserInfo",value:function(){return fetch("".concat(this._serverUrl,"/users/me"),{method:"GET",headers:this._headers}).then(this._checkServerResponse)}},{key:"uploadUserInfo",value:function(e){return fetch("".concat(this._serverUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:e.profileName,about:e.profileInfo})}).then(this._checkServerResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this._serverUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:e.avatarLink})}).then(this._checkServerResponse)}}])&&e(n.prototype,r),Object.defineProperty(n,"prototype",{writable:!1}),t}();function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var o=function(){function e(t,n){var o=this,i=t.data,u=t.userId,a=t.handleCardClick,c=t.handleDeleteButton,s=t.likeCard,l=t.unlikeCard;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r(this,"generateCard",(function(){return o._card=o._getTemplate(),o._cardDeleteButton=o._card.querySelector(".card__delete-button"),o._cardTitle=o._card.querySelector(".card__title"),o._cardPhoto=o._card.querySelector(".card__photo"),o._deleteButton=o._card.querySelector(".card__delete-button"),o._likeButton=o._card.querySelector(".card__like-button"),o._likesNumber=o._card.querySelector(".card__like-counter"),o._setEventListeners(),o.setLikesCount(o.data),o._cardPhoto.src=o._link,o._cardPhoto.alt=o._name,o._cardTitle.textContent=o._name,o._checkLikeOwner(),o._isMyCard()||(o._cardDeleteButton.remove(),o._cardDeleteButton=null),o._card})),r(this,"_setEventListeners",(function(){o._likeButton.addEventListener("click",(function(){o._likeButton.classList.contains("card__like-button_active")?o._removeLike():o._setLike()})),o._deleteButton.addEventListener("click",o._handleDeleteButton),o._cardPhoto.addEventListener("click",(function(){o._handleCardClick(o._link,o._name)}))})),r(this,"deleteCard",(function(){o._card.remove(),o._card=null})),this.data=i,this._name=i.name,this._link=i.link,this._cardTemplateSelector=n,this._handleCardClick=a,this._userId=u,this._handleDeleteButton=c,this._likeCard=s,this._unlikeCard=l}var t,o;return t=e,(o=[{key:"_getTemplate",value:function(){return document.querySelector(this._cardTemplateSelector).content.querySelector(".card").cloneNode(!0)}},{key:"_isMyCard",value:function(){return this.data.owner._id===this._userId}},{key:"_checkLikeOwner",value:function(){var e=this;this.data.likes.forEach((function(t){t._id===e._userId&&e.addLikeClass()}))}},{key:"addLikeClass",value:function(){this._likeButton.classList.add("card__like-button_active")}},{key:"removeLikeClass",value:function(){this._likeButton.classList.remove("card__like-button_active")}},{key:"_setLike",value:function(e){this._likeCard(e)}},{key:"_removeLike",value:function(e){this._unlikeCard(e)}},{key:"setLikesCount",value:function(e){0===e.likes.length?this._likesNumber.textContent=null:this._likesNumber.textContent=e.likes.length}}])&&n(t.prototype,o),Object.defineProperty(t,"prototype",{writable:!1}),e}();function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var u=function(){function e(t,n){var r=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=r,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.reverse().forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._container.prepend(e)}}])&&i(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(e){"Escape"===e.key&&o.close()},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){document.addEventListener("keydown",this._handleEscClose),this._popup.classList.add("popup_opened")}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("mousedown",(function(t){(t.target.classList.contains("popup_opened")||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&a(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e){return s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},s(e)}function l(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(){return p="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=f(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},p.apply(this,arguments)}function f(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=_(e)););return e}function d(e,t){return d=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},d(e,t)}function h(e,t){if(t&&("object"===s(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function _(e){return _=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},_(e)}var y=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&d(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=_(r);if(o){var n=_(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return h(this,e)});function u(e,t){var n,r=t.setFormSubmitHandler;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(n=i.call(this,e))._setFormSubmitHandler=r,n._popupForm=n._popup.querySelector(".popup__form"),n._inputList=Array.from(n._popupForm.querySelectorAll(".popup__input")),n._popupButton=n._popupForm.querySelector(".popup__submit-button"),n._buttonText=n._popupButton.textContent,n}return t=u,n=[{key:"_getInputValues",value:function(){var e=this;return this._newValues={},this._inputList.forEach((function(t){e._newValues[t.name]=t.value.trim()})),this._newValues}},{key:"setInputValues",value:function(e){this._inputList.forEach((function(t){t.value=e[t.name]}))}},{key:"setEventListeners",value:function(){var e=this;p(_(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._setFormSubmitHandler(e._getInputValues())}))}},{key:"close",value:function(){p(_(u.prototype),"close",this).call(this),this._popupForm.reset()}},{key:"loading",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Сохранение...";this._popupButton.textContent=e?t:this._buttonText}}],n&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function b(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=k(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},m.apply(this,arguments)}function k(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function S(e,t){return S=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},S(e,t)}function g(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&S(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(r);if(o){var n=w(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return g(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupImage=t._popup.querySelector(".popup__image"),t._popupCaption=t._popup.querySelector(".popup__caption"),t}return t=u,(n=[{key:"open",value:function(e){this._popupImage.src=e.link,this._popupCaption.textContent=e.name,this._popupImage.alt=e.name,m(w(u.prototype),"open",this).call(this)}}])&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c);function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var O=function(){function e(t){var n=t.userNameSelector,r=t.aboutUserSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._userName=document.querySelector(n),this._userAbout=document.querySelector(r),this._userAvatar=document.querySelector(o),this._userInfo={}}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return this._userInfo.profileName=this._userName.textContent,this._userInfo.profileInfo=this._userAbout.textContent,this._userInfo}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about,r=e.avatar;e._id,this._userName.textContent=t,this._userAbout.textContent=n,this._userAvatar.src=r}},{key:"setAvatar",value:function(e){var t=e.avatar;e._id,this._userAvatar.src=t}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function L(e){return L="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=R(e)););return e}function B(e,t){return B=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},B(e,t)}function q(e,t){if(t&&("object"===L(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function R(e){return R=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},R(e)}var T=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&B(e,t)}(u,e);var t,n,r,o,i=(r=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=R(r);if(o){var n=R(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function u(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,u),(t=i.call(this,e))._popupForm=t._popup.querySelector(".popup__form"),t._popupButton=t._popupForm.querySelector(".popup__submit-button "),t._buttonText=t._popupButton.textContent,t}return t=u,(n=[{key:"setSubmitHandler",value:function(e){this._setSubmitHandler=e}},{key:"setEventListeners",value:function(){var e=this;P(R(u.prototype),"setEventListeners",this).call(this),this._popupForm.addEventListener("submit",(function(t){t.preventDefault(),e._setSubmitHandler()}))}},{key:"loading",value:function(e){this._popupButton.textContent=e?"Удаление...":this._buttonText}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),u}(c),x=(document.querySelector(".popup_type_edit-profile").querySelector(".popup__form"),document.querySelector(".profile__edit-button")),A=(document.querySelector(".popup_type_add-card").querySelector(".popup__form"),document.querySelector(".profile__add-button")),U=(document.querySelector(".popup_type_deletion-confirmation").querySelector(".card__delete-button"),document.querySelector(".popup_type_edit-avatar")),D=document.querySelector(".profile__edit-avatar-button");function F(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}U.querySelector(".popup__form");var N=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._activeButtonClass=t.activeButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._form=n,this._buttonElement=this._form.querySelector(this._submitButtonSelector),this._inputList=Array.from(this._form.querySelectorAll(this._inputSelector))}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t){var n=this._form.querySelector(".".concat(e.id,"-error"));e.classList.add(this._inputErrorClass),n.textContent=t,n.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e){var t=this._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(this._inputErrorClass),t.classList.remove(this._errorClass),t.textContent=""}},{key:"_checkInputValidity",value:function(e){if(e.validity.valid)this._hideInputError(e);else{var t=e.validationMessage;this._showInputError(e,t)}}},{key:"_hasInvalidInput",value:function(e){return e.some((function(e){return!e.validity.valid}))}},{key:"_toggleButtonState",value:function(e){this._hasInvalidInput(e)?(this._buttonElement.classList.remove(this._activeButtonClass),this._buttonElement.disabled=!0):(this._buttonElement.classList.add(this._activeButtonClass),this._buttonElement.disabled=!1)}},{key:"_setInputEvtListeners",value:function(){var e=this;this._inputList.forEach((function(t){t.addEventListener("input",(function(){e._checkInputValidity(t),e._toggleButtonState(e._inputList)}))}))}},{key:"enableValidation",value:function(){this._setInputEvtListeners(this._form)}},{key:"setDefaultInputState",value:function(){var e=this;this._inputList.forEach((function(t){e._hideInputError(t)})),this._toggleButtonState(this._inputList)}}])&&F(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function H(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var V,M=new t({serverUrl:"https://mesto.nomoreparties.co/v1/cohort-45",headers:{authorization:"1133b8bd-97d0-4ecb-ab73-7c32b64892f8","Content-Type":"application/json"}}),J=new O({userNameSelector:".profile__title",aboutUserSelector:".profile__subtitle",avatarSelector:".profile__avatar"});Promise.all([M.downloadUserInfo(),M.downloadInitialCards()]).then((function(e){var t,n,r=(n=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i=[],u=!0,a=!1;try{for(n=n.call(e);!(u=(r=n.next()).done)&&(i.push(r.value),!t||i.length!==t);u=!0);}catch(e){a=!0,o=e}finally{try{u||null==n.return||n.return()}finally{if(a)throw o}}return i}}(t,n)||function(e,t){if(e){if("string"==typeof e)return H(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?H(e,t):void 0}}(t,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=r[0],i=r[1];V=o._id,J.setUserInfo(o),z.renderItems(i)})).catch((function(e){return console.log(e)}));var z=new u({renderer:function(e){z.addItem(X(e))}},".elements__cards"),G=new y(".popup_type_edit-profile",{setFormSubmitHandler:function(e){G.loading(!0),M.uploadUserInfo(e).then((function(e){J.setUserInfo(e),G.close()})).catch((function(e){console.error(e)})).finally((function(){G.loading(!1)}))}});G.setEventListeners();var $=new y(".popup_type_add-card",{setFormSubmitHandler:function(e){$.loading(!0),M.uploadCard(e).then((function(e){z.addItem(X(e)),$.close()})).catch((function(e){console.error(e)})).finally((function(){$.loading(!1)}))}});$.setEventListeners();var K=new y(".popup_type_edit-avatar",{setFormSubmitHandler:function(e){K.loading(!0),M.editAvatar(e).then((function(e){J.setAvatar(e),K.close()})).catch((function(e){console.log(e)})).finally((function(){K.loading(!1)}))}});K.setEventListeners();var Q=new T(".popup_type_deletion-confirmation",{setFormSubmitHandler:function(){Q.close()}});Q.setEventListeners();var W=new C(".popup_type_zoom-image");function X(e){var t=new o({data:e,userId:V,handleCardClick:function(){W.open(e),console.log(e)},handleDeleteButton:function(){Q.setSubmitHandler((function(){Q.loading(!0),M.deleteCardfromServer(e._id).then((function(){t.deleteCard(),Q.close()})).catch((function(e){console.log(e)})).finally((function(){Q.loading(!1)}))})),Q.open()},likeCard:function(){M.sendCardLike(e).then((function(e){t.addLikeClass(),t.setLikesCount(e)})).catch((function(e){console.log(e)}))},unlikeCard:function(){M.deleteCardLike(e).then((function(e){t.removeLikeClass(),t.setLikesCount(e)})).catch((function(e){console.log(e)}))}},".card-template",V);return t.generateCard()}W.setEventListeners();var Y,Z={};Y={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit-button",activeButtonClass:"popup__submit-button_active",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active"},Array.from(document.querySelectorAll(Y.formSelector)).forEach((function(e){var t=new N(Y,e),n=e.getAttribute("name");Z[n]=t,t.enableValidation()})),x.addEventListener("click",(function(){var e=J.getUserInfo();G.setInputValues(e),Z.profileEditForm.setDefaultInputState(),G.open()})),A.addEventListener("click",(function(){Z.newCardForm.setDefaultInputState(),$.open()})),D.addEventListener("click",(function(){Z.avatarEditForm.setDefaultInputState(),K.open()}))})();
//# sourceMappingURL=main.js.map