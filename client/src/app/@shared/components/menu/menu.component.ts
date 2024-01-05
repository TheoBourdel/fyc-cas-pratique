import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  visible: boolean = false;
  folderForm: FormGroup = new FormGroup({});
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  showDialog() {
    this.visible = true;
  }

  createForm(): void {
    this.folderForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });
  }

  onSubmit(): void {
    const formData = this.folderForm.value;
    this.createFolder(formData);
  }

  onUpload(event: any) {
  }

  createFolder(folder: any) {
  }
}
