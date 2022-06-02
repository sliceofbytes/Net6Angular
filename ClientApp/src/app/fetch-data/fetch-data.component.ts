import { Component, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-fetch-data',
  templateUrl: './fetch-data.component.html'
})
export class FetchDataComponent {
  public forecasts: WeatherForecast[] = [];

  file: File | null = null;
  baseUrl: string = '';


  constructor(private http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.baseUrl = baseUrl;
    http.get<WeatherForecast[]>(baseUrl + 'weatherforecast').subscribe(result => {
      this.forecasts = result;
    }, error => console.error(error));
  }

  onFileUpload(files: FileList) {
    // If you want to do multiple just loop over and set input to multiple
    this.file = files.item(0);
    const form: FormData = new FormData();
    form.append('file', this?.file as Blob, this.file?.name);
    this.http.post(this.baseUrl + 'weatherforecast', form).subscribe((response) => {
      alert('success');
    }, (error) => {
      alert('error');
    });


  }
}






interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}
