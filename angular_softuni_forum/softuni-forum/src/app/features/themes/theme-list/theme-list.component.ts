import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, filter, map, mergeMap, startWith, switchMap, tap } from 'rxjs';
import { ITheme } from '../../../core/interfaces';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit, AfterViewInit {

  l10n = {
    'en': {
      'no-themes-message': 'No themes!'
    },
    'bg': {
      'no-themes-message': 'Няма теми!'
    }
  }

  localize(key: string, l10n: { [key: string]: { [key: string]: string } }) {
    const local = 'bg';

    return l10n[local][key];
  }
  themeList!: ITheme[];

  searchControl = new FormControl('');
  // '', { updateOn: 'blur' }

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    console.log('searchTerm')
    this.searchControl.valueChanges.pipe(

      debounceTime(300),
      filter(searchTerm => searchTerm.length > 3), // To start search after 3rd symbol, e.g. minimum 4 symbols to search
      startWith(''),
      tap(searchTerm => (console.log('searchTerm', searchTerm))),
      switchMap(searchTerm => this.themeService.loadThemeList(searchTerm)))
      .subscribe(themeList => {
        this.themeList = themeList;
      })
  }

  ngAfterViewInit(): void {
    // console.log('View was initialized');
  }

}