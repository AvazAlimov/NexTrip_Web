<?php

class Menu
{
    private $foods = array();
    private $price = array();

    public function __construct()
    {
        $this->foods = array();
        $this->price = array();
    }


    public function addItem($name, $price)
    {
        array_push($this->foods, $name);
        array_push($this->price, $price);
    }

    public function setPrice($price)
    {
        $this->price = $price;
    }

    public function setFoods($foods)
    {
        $this->foods = $foods;
    }

    public function getFoods()
    {
        return $this->foods;
    }

    public function getPrice()
    {
        return $this->price;
    }

    public function toString()
    {
        $string = "";
        for ($i = 0; $i < count($this->foods); $i++)
            $string .= $this->foods[$i] . "□" . $this->price[$i] . "▣";
        return substr($string, 0, count($string) - 1);
    }

    public function setMenu($string)
    {
        $index = 0;
        for ($i = 0; $i < count($string); $i++) {
            if ($string[$i] == '▣' || $i == count($string) - 1) {
                $last = $i == count($string) - 1 ? $i + 1 : $i;
                $this->setItem(substr($string, $index, $last));
                $index = $i + 1;
            }
        }
    }

    private function setItem($string)
    {
        $index = strpos($string, '□');
        array_push($this->foods, substr($string, 0, $index));
        array_push($this->price, substr($string, $index + 1, count($string)));
    }
}