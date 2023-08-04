import { BASE_URL } from "../../config"

export const fetchList = async()=>{
    return await BASE_URL.get(
        "admins/ecommerce/category/list"
    )
}