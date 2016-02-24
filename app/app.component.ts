import {Component} from 'angular2/core';
import {DemoService} from './demo.service';

@Component({
	selector: 'my-app',
	template: `
		<h1>Angular2 HTTP Demo App</h1>
			<h2>Foods</h2>
				<ul>
					<li *ngFor="#food of foods">{{food.name}}</li>
				</ul>
		<h2>Books and Movies</h2>
			<h3>Books</h3>
				<ul>
					<li *ngFor="#book of books">{{book.title}}</li>
				</ul>
			<h3>Movies</h3>
				<ul>
					<li *ngFor="#movie of movies">{{movie.title}}</li>
				</ul>
		`
})

export class AppComponent {
	public foods;
	public books;
	public movies;

	constructor(private _demoService: DemoService ) { }

	ngOnInit() {
		this.getFoods();
		this.getBooksAndMovies();
	}

	getFoods() {
		this._demoService.getFoods().subscribe(
			//success
			data => { this.foods = data }, 
			err => console.log(err),
			// this function runs on completion
			() => console.log('done loading foods');
		);	
	}

	getBooksAndMovies() {
		this._demoService.getBooksAndMovies().subscribe(
			data => {
				this.books = data[0]
				this.movies = data[1]
			}
		);
	}
}