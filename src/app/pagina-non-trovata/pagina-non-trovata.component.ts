import { Component, OnInit } from '@angular/core';
import { ThememodeService } from '../thememode.service';

@Component({
  selector: 'app-pagina-non-trovata',
  templateUrl: './pagina-non-trovata.component.html',
  styleUrls: ['./pagina-non-trovata.component.css']
})
export class PaginaNonTrovataComponent implements OnInit {

  constructor(private themeModeService :ThememodeService) { }

  ngOnInit(): void {
  }

  getThemeMode() {
    return this.themeModeService.thememode
  }

}
