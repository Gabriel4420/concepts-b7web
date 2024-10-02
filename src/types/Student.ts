export interface Student {
    student: Array<{
        id: number,
        active: boolean,
        name: string,
        email: string,
        avatar: string,
        grade1: number,
        grade2: number
    }>
}