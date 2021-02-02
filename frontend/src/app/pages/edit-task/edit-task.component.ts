import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute, Router } from '@angular/router';
import { TaskService } from 'src/app/task.service';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {

  constructor(private route: ActivatedRoute, private taskService: TaskService, private router: Router) { }

  taskId: string;
  listId: string;

  ngOnInit(): void {
    // Subscribe to param changes
    this.route.params.subscribe(
      (params: Params) => {
        this.taskId = params.taskId;
        this.listId = params.listId;
      }
    )
  }

  updateTask(title: string) {
    // Call task service to update the list
    this.taskService.updateTask(this.listId, this.taskId, title).subscribe(() => {
      // Navigtae to the task view for this list
      this.router.navigate(['/lists', this.taskId]);
    })
  }

}
