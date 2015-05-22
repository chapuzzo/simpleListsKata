describe("List", function() {

  it("returns null", function() {
    var list = new List();

    expect(list.find('el menda')).toBeNull();
  });

  it("returns the element if is found", function() {
    var list = new List();
    list.add('el menda');

    expect(list.find('el menda').value()).toEqual('el menda');
  });

  it("returns the element in a list if 2 elements", function() {
    var list = new List();
    list.add('el menda');
    list.add('la emma');

    expect(list.find('el menda').value()).toEqual('el menda');
  });

  it("returns the element any of the searched elements", function() {
    var list = new List();
    list.add('la emma');
    list.add('el menda');

    expect(list.find('el menda').value()).toEqual('el menda');
  });

  it("returns the second element", function() {
    var list = new List();
    list.add('la emma');
    list.add('el menda');
    list.add('soy el tercero');

    expect(list.find('el menda').value()).toEqual('el menda');
  });

  it("delete element", function() {
    var list = new List();
    list.add('la emma');
    list.add('el menda');
    list.add('soy el tercero');

    list.deleteElement('la emma');
    expect(list.find('la emma')).toBeNull();
  })

});
