export interface Dataset {
    isMetazoan(className: string): Promise<Boolean>
}
