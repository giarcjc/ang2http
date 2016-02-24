System.register(['angular2/core', 'angular2/http', 'rxjs/Rx'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1, Rx_1;
    var DemoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            }],
        execute: function() {
            DemoService = (function () {
                function DemoService(http) {
                    this.http = http;
                }
                //Uses http.get() to load a single JSON file
                DemoService.prototype.getFoods = function () {
                    return this.http.get('/app/food.json').map(function (res) { return res.json(); });
                };
                //Uses Observable.forkJoin() to run multiple concurrent http.get() requests.
                // The entire operation will result in an error state if any single request fails.
                DemoService.prototype.getBooksAndMovies = function () {
                    return Rx_1.Observable.forkJoin(this.http.get('/app/books.json').map(function (res, Response) { return res.json(); }), this.http.get('/app/movies.json').map(function (res, Response) { return res.json(); }));
                };
                DemoService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], DemoService);
                return DemoService;
            })();
            exports_1("DemoService", DemoService);
        }
    }
});
//# sourceMappingURL=demo.service.js.map