import { Customer } from "../../../../models/customer.schema";
import { commonRepository } from "../../../../repositories/common.repository";

export const getCustomerService = async () => {
    const data = await commonRepository(Customer).find()
    if(data?.length){
        return data
    }else{
        throw new Error("DATA_NOT_FOUND")
    }
};
