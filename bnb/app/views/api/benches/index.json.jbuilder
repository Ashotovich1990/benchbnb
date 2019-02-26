json.array! @benches do |bench|
  json.set! bench.id do 
    json.extract! bench, :id, :description, :lat, :lng
  end
end


# $.ajax({
#     url: "/api/benches",
#     method: "get",
# }).then(res => console.log(res));