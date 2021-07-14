interface DatasetPageData {
    kpi1: KPIData;
    kpi2: KPIData;
    datasets: DatasetData[];
    rowPerPage: number;
}

interface KPIData {
    name: string;
    value: number;
    ValueHint?: number;
    note?: string;
}

export interface DatasetData {
    name: string;
    details: string;
    importance: DatasetImportance;
    service: OperationStatus;
    drift: OperationStatus;
    accuracy: OperationStatus;
    predictionAvg: number;
    predictionAvgLabel: string;
    lastPrediction: string;
}

export type DatasetImportance = 'Low' | 'Medium' | 'High';

export enum OperationStatus  {
    Failed,
    Done,
    Unknown
}

export type SortDirection = 'ASC' | 'DESC' | ''

export const LocalData: DatasetPageData = {
    kpi1: {
        name: 'Active Deployments',
        value: 15,
    },
    kpi2: {
        name: 'Predictions',
        value: 13623007,
        ValueHint:-0.35,
        note: 'Last 7 Days'
    },
    rowPerPage: 15,
    datasets: [
        {
            name: 'Employee Churn (People Operation)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'High',
            service: OperationStatus.Done,
            drift: OperationStatus.Done,
            accuracy: OperationStatus.Done,
            predictionAvg: 208000,
            predictionAvgLabel: '208k',
            lastPrediction: 'a few seconds ago'
        },
        {
            name: 'Employee Candidate Score (People Operations)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'Medium',
            service: OperationStatus.Done,
            drift: OperationStatus.Done,
            accuracy: OperationStatus.Done,
            predictionAvg: 148000,
            predictionAvgLabel: '148k',
            lastPrediction: 'a few seconds ago'
        },
        {
            name: 'Interest Score (Marketing)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'Low',
            service: OperationStatus.Done,
            drift: OperationStatus.Failed,
            accuracy: OperationStatus.Unknown,
            predictionAvg: 202000,
            predictionAvgLabel: '202k',
            lastPrediction: 'a minute ago'
        },
        {
            name: 'Sales Cycle Length (Revenue Forcasting)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'Medium',
            service: OperationStatus.Failed,
            drift: OperationStatus.Done,
            accuracy: OperationStatus.Done,
            predictionAvg: 24000,
            predictionAvgLabel: '24k',
            lastPrediction: '2 days ago'
        },
        {
            name: 'Employee Churn (People Operation)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'High',
            service: OperationStatus.Done,
            drift: OperationStatus.Done,
            accuracy: OperationStatus.Done,
            predictionAvg: 208000,
            predictionAvgLabel: '208k',
            lastPrediction: 'a few seconds ago'
        },
        {
            name: 'Employee Candidate Score (People Operations)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'Medium',
            service: OperationStatus.Done,
            drift: OperationStatus.Done,
            accuracy: OperationStatus.Done,
            predictionAvg: 148000,
            predictionAvgLabel: '148k',
            lastPrediction: 'a few seconds ago'
        },
        {
            name: 'Interest Score (Marketing)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'Low',
            service: OperationStatus.Done,
            drift: OperationStatus.Failed,
            accuracy: OperationStatus.Unknown,
            predictionAvg: 202000,
            predictionAvgLabel: '202k',
            lastPrediction: 'a minute ago'
        },
        {
            name: 'Sales Cycle Length (Revenue Forcasting)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'Medium',
            service: OperationStatus.Failed,
            drift: OperationStatus.Done,
            accuracy: OperationStatus.Done,
            predictionAvg: 24000,
            predictionAvgLabel: '24k',
            lastPrediction: '2 days ago'
        },
        {
            name: 'Employee Churn (People Operation)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'High',
            service: OperationStatus.Done,
            drift: OperationStatus.Done,
            accuracy: OperationStatus.Done,
            predictionAvg: 208000,
            predictionAvgLabel: '208k',
            lastPrediction: 'a few seconds ago'
        },
        {
            name: 'Employee Candidate Score (People Operations)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'Medium',
            service: OperationStatus.Done,
            drift: OperationStatus.Done,
            accuracy: OperationStatus.Done,
            predictionAvg: 148000,
            predictionAvgLabel: '148k',
            lastPrediction: 'a few seconds ago'
        },
        {
            name: 'Interest Score (Marketing)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'Low',
            service: OperationStatus.Done,
            drift: OperationStatus.Failed,
            accuracy: OperationStatus.Unknown,
            predictionAvg: 202000,
            predictionAvgLabel: '202k',
            lastPrediction: 'a minute ago'
        },
        {
            name: 'Sales Cycle Length (Revenue Forcasting)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'Medium',
            service: OperationStatus.Failed,
            drift: OperationStatus.Done,
            accuracy: OperationStatus.Done,
            predictionAvg: 24000,
            predictionAvgLabel: '24k',
            lastPrediction: '2 days ago'
        },
        {
            name: 'Employee Churn (People Operation)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'High',
            service: OperationStatus.Done,
            drift: OperationStatus.Done,
            accuracy: OperationStatus.Done,
            predictionAvg: 208000,
            predictionAvgLabel: '208k',
            lastPrediction: 'a few seconds ago'
        },
        {
            name: 'Employee Candidate Score (People Operations)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'Medium',
            service: OperationStatus.Done,
            drift: OperationStatus.Done,
            accuracy: OperationStatus.Done,
            predictionAvg: 148000,
            predictionAvgLabel: '148k',
            lastPrediction: 'a few seconds ago'
        },
        {
            name: 'Interest Score (Marketing)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'Low',
            service: OperationStatus.Done,
            drift: OperationStatus.Failed,
            accuracy: OperationStatus.Unknown,
            predictionAvg: 202000,
            predictionAvgLabel: '202k',
            lastPrediction: 'a minute ago'
        },
        {
            name: 'Sales Cycle Length (Revenue Forcasting)',
            details: 'DataRobot Prediction Server | new Model for LC (19Nov)',
            importance: 'Medium',
            service: OperationStatus.Failed,
            drift: OperationStatus.Done,
            accuracy: OperationStatus.Done,
            predictionAvg: 24000,
            predictionAvgLabel: '24k',
            lastPrediction: '2 days ago'
        },

    ]
}
