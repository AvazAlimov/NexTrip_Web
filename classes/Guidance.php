<?php

class Guidance
{
    private $id;
    private $rating;
    private $name;
    private $info;
    private $location;
    private $photos = array(); //ArrayList<String>
    private $contacts = array(); //ArrayList<Contact>
    private $comments; //ArrayList<Comment>
    private $amenties = array(); //ArrayList<String>
    private $ratings = array(); //ArrayList<Integer>

    public function __construct()
    {
        $this->rating = 0;
        $this->photos = array();
        $this->contacts = array();
        $this->comments = array();
        $this->amenties = array();
        $this->ratings = array();
    }

    public function toString()
    {
        return $this->id . "◎" . $this->rating . "◎" . $this->name . "◎" . $this->info . "◎" . $this->location . "◎" . $this->getImageLinks() . "◎" . $this->contactsToString() . "◎" . $this->commentsToString() . "◎" . $this->ammenityToString() . "◎" . $this->ratingsToString() . "◎";
    }


    public function ratingsToString()
    {
        if (empty($this->ratings))
            return "";

        $string = "";
        foreach ($this->ratings as $rating1)
            $string .= $rating1 . "/";
        return substr($string, 0, count($string) - 1);
    }

    public function setRatings($string)
    {
        $index = 0;
        for ($i = 0; $i < count($string); $i++)
            if ($string[$i] == '/' || $i == count($string) - 1) {
                $last = $i == count($string) - 1 ? $i + 1 : $i;
                array_push($this->ratings, (int)(substr($string, $index, $last)));
                $index = $i + 1;
            }
        $this->calculateRating();
    }

    public function addRating($rating)
    {
        array_push($this->ratings, $rating);
        $this->calculateRating();
    }

    private function calculateRating()
    {
        if (empty($this->ratings))
            return;

        $counter = 0;
        foreach ($this->ratings as $rating1) $counter += $rating1;
        $this->rating = $counter / count($this->ratings);
    }

    public function addComment($comment)
    {
        array_push($this->comments, $comment);
    }

    public function ammenityToString()
    {
        if (empty($this->amenties))
            return "";

        $string = "";
        foreach ($this->amenties as $amenity)
            $string .= $amenity . "■";
        return substr($string, 0, count($string) - 1);
    }

    public function commentsToString()
    {
        if (empty($this->comments))
            return "";

        $string = "";

        foreach ($this->comments as $comment)
            $string .= $comment . "■";
        return substr($string, 0, count($string) - 1);
    }

    public function contactsToString()
    {
        if (empty($this->contacts))
            return "";

        $string = "";
        foreach ($this->contacts as $contact)
            $string .= $contact . "■";
        return substr($string, 0, count($string) - 1);
    }

    public function getImageLinks()
    {
        if (empty($this->photos))
            return "";
        $string = "";
        foreach ($this->photos as $image)
            $string .= $image . "■";
        return substr($string, 0, count($string) - 1);
    }

    public function getName()
    {
        return $this->name;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getRating()
    {
        return $this->rating;
    }

    public function getInfo()
    {
        return $this->info;
    }

    public function setInfo($info)
    {
        $this->info = $info;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getLocation()
    {
        return $this->location;
    }

    public function setLocation($location)
    {
        $this->location = $location;
    }

    public function setImages($string)
    {
        $index = 0;
        for ($i = 0; $i < count($string); $i++)
            if ($string[$i] == '■' || $i == count($string) - 1) {
                $last = $i == count($string) - 1 ? $i + 1 : $i;
                array_push($this->photos, substr($string, $index, $last));
                $index = $i + 1;
            }
    }

    public function setContactsByString($string)
    {
        $index = 0;
        for ($i = 0; $i < count($string); $i++)
            if ($string[$i] == '■' || $i == count($string) - 1) {
                $last = $i == count($string) - 1 ? $i + 1 : $i;
                array_push($this->contacts, new Contact(substr($string, $index, $last)));
                $index = $i + 1;
            }
    }

    public function setComments($string)
    {
        $index = 0;
        for ($i = 0; $i < count($string); $i++)
            if ($string[$i] == '■' || $i == count($string) - 1) {
                $last = $i == count($string) - 1 ? $i + 1 : $i;
                array_push($this->comments, new Comment(substr($string, $index, $last)));
                $index = $i + 1;
            }
    }

    public function setAmenitiesByString($string)
    {
        $index = 0;
        for ($i = 0; $i < count($string); $i++)
            if ($string[$i] == '■' || $i == count($string) - 1) {
                $last = $i == count($string) - 1 ? $i + 1 : $i;
                array_push($this->amenties, substr($string, $index, $last));
                $index = $i + 1;
            }
    }

    public function getRatings()
    {
        return $this->ratings;
    }

    public function getContacts()
    {
        return $this->contacts;
    }

    public function setContacts(Contact $contacts)
    {
        $this->contacts = $contacts;
    }

    public function getComments()
    {
        return $this->comments;
    }

    public function getAmenties()
    {
        return $this->amenties;
    }

    public function setAmenities($amenties)
    {
        $this->amenties = $amenties;
    }

    public function setPhotos($photos)
    {
        $this->photos = $photos;
    }

    public function getPhotos()
    {
        return $this->photos;
    }
}