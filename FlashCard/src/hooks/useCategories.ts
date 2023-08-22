import useData from "./useData";

interface Category{
  id:number
  category: string
}

const useCategories = () => useData()

export default useCategories