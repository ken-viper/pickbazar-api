import { PartialType, PickType } from "@nestjs/swagger";
import { Feedback } from "../entities/feedback.entity";

export class CreateFeedBackDto extends PickType(Feedback, [
  "model_id",
  "model_type",
  "positive",
  "negative",
]) {}

export class UpdateFeedBackDto extends PartialType(CreateFeedBackDto) {}
 