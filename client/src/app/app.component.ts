import { Component } from '@angular/core';
import { MenuComponent } from './@shared/components/menu/menu.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  folders: any[] = [];
  documents: any[] = [];

  folderForm: FormGroup = new FormGroup({});
  documentForm: FormGroup = new FormGroup({});

  visibleFolder: boolean = false;
  visibleDocument: boolean = false;
  selectedFolderId: number = 0;
  selectedDocumentId: number = 0;

  constructor(
    private fb: FormBuilder,
  ) { 
    this.folderForm = this.fb.group({
      name: ['', Validators.required],
      description: ['']
    });

    this.documentForm = this.fb.group({
      title: ['', Validators.required],
    });
  }

  ngOnInit() {
  }

  getFolders() {
  } 

  getDocuments() {
  }

  deleteDocument(documentId: number) {
  }

  deleteFolder(folderId: number) {
  }

  updateFolder() {
    const formData = this.folderForm.value;
  }

  updateDocument() {
    const formData = this.documentForm.value;
  }

  showUpdateFolderDialog(folder: any): void {
    this.selectedFolderId = folder.id;
    this.folderForm.patchValue({
      name: folder.name,
      description: folder.description
    });

    this.visibleFolder = true;
  }

  showUpdateDocumentDialog(document: any): void {
    this.selectedDocumentId = document.id;
    this.documentForm.patchValue({
      title: document.title,
    });

    this.visibleDocument = true;
  } 
}
