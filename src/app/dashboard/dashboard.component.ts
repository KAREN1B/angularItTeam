import { Component } from '@angular/core';
import { InfoImageService } from '../services/infoImage.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent {
  /* variables de datos a guardar segun filtro */
query=''
nameCategory=''
opcionSeleccionado=''
	data: any = [];
  /* data a traer y datos -> categorias a buscar */
	datos=['Science',' Education',' People',' Feelings','Computer',' Buildings'];

	constructor(
    /* servicio a llamar */
    private  infoImageService:InfoImageService,
      ) { }

  ngOnInit(): void {
     /* Es invocado el traer todas las imagenes y este funciona
     tan pronto el proyecto sea desplegado */
    this.getInfoimageList();

  }

   /* busca  por palabra y se guarda en query*/
	public getInfoimageList( ) {
    /* traer toda la data de imagenes */
			this.infoImageService.getinfoImage().subscribe( data => {
				this.data = data.hits;
			} )
		}
		onSearch(){
			this.infoImageService.getFilterImage(this.query).subscribe( data => {
				this.data = data.hits;
			} )
		}

     /* busca al seleccionar el dropdown  */
		capturar(){
			this.infoImageService.getFilterCategoryImage(this.opcionSeleccionado.toLowerCase()).subscribe(data=>{
				this.data = data.hits
				this.nameCategory=this.opcionSeleccionado
			})
		}
}
