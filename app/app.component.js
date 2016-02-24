System.register(['angular2/core', './demo.service'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, demo_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (demo_service_1_1) {
                demo_service_1 = demo_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_demoService) {
                    this._demoService = _demoService;
                }
                AppComponent.prototype.ngOnInit = function () {
                    this.getFoods();
                    this.getBooksAndMovies();
                };
                AppComponent.prototype.getFoods = function () {
                    var _this = this;
                    this._demoService.getFoods().subscribe(
                    //success
                    function (data) { _this.foods = data; }, function (err) { return console.log(err); }, 
                    // this function runs on completion
                    function () { return console.log('done loading foods'); });
                    ;
                };
                AppComponent.prototype.getBooksAndMovies = function () {
                    var _this = this;
                    this._demoService.getBooksAndMovies().subscribe(function (data) {
                        _this.books = data[0];
                        _this.movies = data[1];
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        template: "\n\t\t<h1>Angular2 HTTP Demo App</h1>\n\t\t\t<h2>Foods</h2>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"#food of foods\">{{food.name}}</li>\n\t\t\t\t</ul>\n\t\t<h2>Books and Movies</h2>\n\t\t\t<h3>Books</h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"#book of books\">{{book.title}}</li>\n\t\t\t\t</ul>\n\t\t\t<h3>Movies</h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li *ngFor=\"#movie of movies\">{{movie.title}}</li>\n\t\t\t\t</ul>\n\t\t"
                    }), 
                    __metadata('design:paramtypes', [demo_service_1.DemoService])
                ], AppComponent);
                return AppComponent;
            })();
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map