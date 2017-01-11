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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var EditorComponent = (function () {
    function EditorComponent(elementRef) {
        this.elementRef = elementRef;
        var randLetter = String.fromCharCode(65 + Math.floor(Math.random() * 26));
        var uniqid = randLetter + Date.now();
        this.elementID = 'tinymce' + uniqid;
        this.contentChanged = new core_1.EventEmitter();
    }
    EditorComponent.prototype.ngAfterViewInit = function () {
        //Clone base textarea
        var baseTextArea = this.elementRef.nativeElement.querySelector("#baseTextArea");
        var clonedTextArea = baseTextArea.cloneNode(true);
        clonedTextArea.id = this.elementID;
        var formGroup = this.elementRef.nativeElement.querySelector("#tinyFormGroup");
        formGroup.appendChild(clonedTextArea);
        //Attach tinyMCE to cloned textarea
        tinymce.init({
            mode: 'exact',
            height: 500,
            language: 'fr_FR',
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
            elements: this.elementID,
            setup: this.tinyMCESetup.bind(this)
        });
    };
    EditorComponent.prototype.ngOnDestroy = function () {
        //destroy cloned elements
        tinymce.get(this.elementID).remove();
        var elem = document.getElementById(this.elementID);
        elem.parentElement.removeChild(elem);
    };
    EditorComponent.prototype.tinyMCESetup = function (ed) {
        ed.on('keyup', this.tinyMCEOnKeyup.bind(this));
    };
    EditorComponent.prototype.tinyMCEOnKeyup = function (e) {
        this.contentChanged.emit(tinymce.get(this.elementID).getContent());
    };
    Object.defineProperty(EditorComponent.prototype, "mceContent", {
        set: function (content) {
            this.htmlContent = content;
        },
        enumerable: true,
        configurable: true
    });
    EditorComponent = __decorate([
        core_1.Component({
            selector: 'editor',
            template: "<div id=\"tinyFormGroup\" class=\"form-group\">\n    <div class=\"hidden\">\n        <textarea id=\"baseTextArea\">{{htmlContent}}</textarea>\n    </div>\n</div>",
            inputs: ['mceContent'],
            outputs: ['contentChanged']
        }),
        __param(0, core_1.Inject(core_1.ElementRef)), 
        __metadata('design:paramtypes', [core_1.ElementRef])
    ], EditorComponent);
    return EditorComponent;
}());
exports.EditorComponent = EditorComponent;
//# sourceMappingURL=editor.component.js.map