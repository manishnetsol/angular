import { Directive, ElementRef, OnChanges,Input, TemplateRef, ViewContainerRef,Renderer  } from '@angular/core';
import { WordService } from '../word.service';

@Directive({
  selector: '[appSearch]'
})
export class SearchDirective implements OnChanges {

  private element: HTMLInputElement;

  private e1: any;

  @Input("appSearch") searchName : string;

  constructor(private elRef: ElementRef,private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private wordService: WordService,private renderer: Renderer) {
    //console.log(viewContainer);
    this.element = elRef.nativeElement;
  }

  ngOnChanges() {
    
    if(this.searchName !='' && typeof this.searchName != 'undefined'){
     
      // Make first character upper case in order to search in the database. 
      let searchName = this.searchName;
      searchName = searchName.charAt(0).toUpperCase() + searchName.slice(1);
      
      // Word service to query it to the database. 
       this.wordService.getSearchWord(searchName).subscribe(data=>{
        
        this.viewContainer.clear();
        for(var i=0; i < data.length; i++) {

          var e1 = this.viewContainer.createEmbeddedView(this.templateRef,{
            $implicit: data[i].name
          });
          this.e1 = e1;
          this.renderer.listen(e1.rootNodes[0], 'click', this.clearSearch.bind(this));
        }

        
        

      });
    } else {
      this.viewContainer.clear();
    }

  }

    
  clearSearch(event: any):void{
      
    this.viewContainer.clear();
    this.e1._view.component.searchkey = '';

  }

}
