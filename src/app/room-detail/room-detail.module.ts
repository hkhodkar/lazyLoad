import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RoomDetailComponent } from "./room-detail/room-detail.component";
import { RoomDetailRoutingModule } from "./room-detail-routing.module";

@NgModule({
  declarations: [RoomDetailComponent],
  imports: [CommonModule, RoomDetailRoutingModule],
})
export class RoomDetailModule {}
