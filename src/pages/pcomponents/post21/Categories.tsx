
export default function Categories() {


    const categories = [
    {"id": 1, "name": "shapes", "parent_id":  ""},
    {"id": 2, "name": "nature", "parent_id":  ""},
    {"id": 3, "name": "flowers", "parent_id": 2},
    {"id": 4, "name": "trees", "parent_id": 2},
    {"id": 5, "name": "plants", "parent_id": 2},
    {"id": 7, "name": "triangles", "parent_id": 1},
    {"id": 8, "name": "circles", "parent_id": 1},
    {"id": 9, "name": "squares", "parent_id": 1},

]
        
    
    return (

  <div>
{
    categories.map((category) => (

  category.parent_id === "" && (

    <div key={category.id}>

      {category.name}

    </div>

  )

))}
  </div>

)
    
}

