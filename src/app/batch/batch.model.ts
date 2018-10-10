import { BatchProcessingStepEnum } from "../shared/enums/batch-processing-step.enum";

export class Batch {
    batchProcessingSeq:number;
    batchSeq:number;
    created:Date;
    lastUpdated:Date;
    finished: Date;
    isBatchClosed:boolean;
    batchClosedReason:string
}

export class BatchProcessingStep {
    batchProcessingStepSeq:number;
    batchProcessingSeq:number;
    step:BatchProcessingStepEnum;
    created:Date;
    finished: Date;
}
export class BatchProcessingError{
    correlationId:string;
    batchProcessingSeq:number;
    batchProcessingStepSeq:number;
    created:Date
}