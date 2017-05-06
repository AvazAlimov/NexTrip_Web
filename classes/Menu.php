<?php

class Menu
{
    public function __construct()
    {
    }

private ArrayList<String> foods;
private ArrayList<String> price;

public Menu() {
foods = new ArrayList<>();
price = new ArrayList<>();
}

public void addItem(String name, String price) {
    foods.add(name);
    this.price.add(price);
}

    public void setPrice(ArrayList<String> price) {
    this.price = price;
}

    public void setFoods(ArrayList<String> foods) {
    this.foods = foods;
}

    public ArrayList<String> getFoods() {
        return foods;
    }

    public ArrayList<String> getPrice() {
        return price;
    }

    public String toString() {
String string = "";
        for (int i = 0; i < foods.size(); i++)
            string += foods.get(i) + "□" + price.get(i) + "▣";
        return string.substring(0, string.length() - 1);
    }

    public void setMenu(String string) {
    int index = 0;
        for (int i = 0; i < string.length(); i++) {
        if (string.charAt(i) == '▣' || i == string.length() - 1) {
            int last = i == string.length() - 1 ? i + 1 : i;
                setItem(string.substring(index, last));
                index = i + 1;
            }
    }
    }

    private void setItem(String string) {
    int index = string.indexOf('□');
        foods.add(string.substring(0, index));
        price.add(string.substring(index + 1, string.length()));
    }
}