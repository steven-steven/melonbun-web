enum RequestStatusOptions {
    PENDING = "PENDING",
    FULFILLED = "FULFILLED",
    COMPLETE = "COMPLETE",
    INCOMPLETE = "INCOMPLETE"
}

export interface IRequestInfo
{
    id:string;
    name:string;
    description:string;
    created_at:string;
    created_by:string;
    status:RequestStatusOptions;
    price:{ value: Number, currency: String };
    tags:Array<string>;
}

export interface IRequestForm
{
    name:string;
    description:string;
    created_by:string;
    price:{ value: Number, currency: String };
    tags:Array<string>;
}