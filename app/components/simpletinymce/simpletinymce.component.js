"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SimpleTinyMCEComponent = (function () {
    function SimpleTinyMCEComponent() {
        this.onEditorKeyup = new core_1.EventEmitter();
    }
    SimpleTinyMCEComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        tinymce.init({
            selector: '#' + this.elementId,
            language: 'fr_FR',
            height: 500,
            theme: 'modern',
            plugins: [
                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                'searchreplace wordcount visualblocks visualchars code fullscreen',
                'insertdatetime media nonbreaking save table contextmenu directionality',
                'emoticons template paste textcolor colorpicker textpattern imagetools codesample toc'
            ],
            toolbar1: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            toolbar2: 'print preview media | forecolor backcolor emoticons | codesample',
            image_advtab: true,
            skin_url: 'assets/skins/lightgray',
            setup: function (editor) {
                _this.editor = editor;
                editor.on('keyup', function () {
                    var content = editor.getContent();
                    _this.onEditorKeyup.emit(content);
                });
            },
        });
        console.log(tinymce);
    };
    SimpleTinyMCEComponent.prototype.ngOnDestroy = function () {
        tinymce.remove(this.editor);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], SimpleTinyMCEComponent.prototype, "elementId", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SimpleTinyMCEComponent.prototype, "onEditorKeyup", void 0);
    SimpleTinyMCEComponent = __decorate([
        core_1.Component({
            selector: 'simple-tiny',
            template: "<textarea id=\"{{elementId}}\"></textarea>"
        }), 
        __metadata('design:paramtypes', [])
    ], SimpleTinyMCEComponent);
    return SimpleTinyMCEComponent;
}());
exports.SimpleTinyMCEComponent = SimpleTinyMCEComponent;
//# sourceMappingURL=simpletinymce.component.js.map