import { Batch, BatchProcessingStep, BatchProcessingError } from "../batch/batch.model";

export class BatchDetail {
    batch:Batch;
    steps:BatchProcessingStep[]=[];
    errors:BatchProcessingError[]=[];
}
