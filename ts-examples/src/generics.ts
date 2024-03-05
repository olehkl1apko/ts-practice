class Pair<K, V> {
  constructor(public key: K, public value: V) {}
}
let pair = new Pair(1, "a"); // let pair = new Pair<number, string>(1, "a");

// generics interfaces
interface IResult<T> {
  data: T | null;
  error: string | null;
}
function fetch<T>(url: string): IResult<T> {
  if (!url) return { data: null, error: null };
  return { data: null, error: null };
}
interface IUser {
  name: string;
}
interface IProduct {
  title: string;
}
let res1 = fetch<IUser>("https://somesite.com/users");
res1.data?.name;
let res2 = fetch<IProduct>("https://somesite.com/products");
res2.data?.title;

// generics constraints
interface IPerson {
  name: string;
}
function echo<T extends IPerson>(value: T): T {
  return value;
}
echo({ name: "Oleh" });

// extending generics classes
interface IThing {
  title: string;
  price: number;
}
class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
}
// pass on the generic type parameter
class CompressibleStore<T> extends Store<T> {
  compress() {}
}
// restricting the generic type parameter
class SearchableStore<T extends { name: string }> extends Store<T> {
  find(name: string): T | undefined {
    return this._objects.find((obj) => obj.name === name);
  }
}
// fixing the generic type parameter
class ProductStore extends Store<IThing> {
  filterByCategory(category: string): IThing[] {
    if (category)
      return [
        {
          title: "T",
          price: 2,
        },
      ];
    return [];
  }
}

// keyof operator
interface ICommodity {
  title: string;
  price: number;
}
class Shop<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }
  // keyof ICommodity => title | price
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find((obj) => obj[property] === value);
  }
}
const shop = new Shop<ICommodity>();
shop.add({ title: "a", price: 1 });
shop.find("title", "a");
shop.find("price", 1);

// type mapping
// see more on https://www.typescriptlang.org/docs/handbook/utility-types.html
type ReadOnly<T> = {
  //index signature
  // keyof
  readonly [K in keyof T]: T[K];
};
type Optional<T> = {
  readonly [K in keyof T]?: T[K];
};
type Nullable<T> = {
  readonly [K in keyof T]: T[K] | null;
};
interface IUser {
  name: string;
  age: number;
}
let user: ReadOnly<IUser> = {
  name: "Ted",
  age: 23,
};
// user.name = 'Ivan' // forbidden
