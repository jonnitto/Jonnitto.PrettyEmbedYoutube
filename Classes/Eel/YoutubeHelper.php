<?php

namespace Jonnitto\PrettyEmbedYoutube\Eel;


use Neos\Flow\Annotations as Flow;
use Neos\Eel\ProtectedContextAwareInterface;

/**
 * @Flow\Proxy(false)
 */
class YoutubeHelper implements ProtectedContextAwareInterface
{

    /**
     * Get Youtube video id from url
     *
     * @param string $url The URL
     *
     * @return string the video id extracted from url
     */

    function parseID($url) {
        if (!$url) {
            return false;
        }
        $regs = array();
        if (preg_match('/(?<=(?:(?<=v)|(?<=i)|(?<=list))=)[a-zA-Z0-9-]+(?=&)|(?<=(?:(?<=v)|(?<=i)|(?<=list))\/)[^&\n]+|(?<=embed\/)[^"&\n]+|(?<=(?:(?<=v)|(?<=i)|(?<=list))=)[^&\n]+|(?<=youtu.be\/)[^&\n]+/im', $url, $regs)) {
            return $regs[0];
        }
        return $url;
    }

    /**
     * Grab the data of a publicly embeddable video hosted on youtube
     * @param string $id The "id" of a video
     * @return mixed The data or false if there's an error
     */
    function data($id)
    {
        if (!$id) {
            return false;
        }
        $data = json_decode(@file_get_contents('https://www.youtube.com/oembed?url=https%3A//youtube.com/watch%3Fv%3D' . $id));
        if (!$data) {
            return false;
        }
        return $data;
    }

    /**
     * Grab the title of a publicly embeddable video hosted on youtube
     * @param string $id The "id" of a video
     * @return mixed The title or false if there's an error
     */
    function title($id) {
        $data = $this->data($id);
        if (!$data) {
            return false;
        }
        return $data->title;
    }

    /**
     * All methods are considered safe
     *
     * @param string $methodName
     * @return boolean
     */
    public function allowsCallOfMethod($methodName)
    {
        return true;
    }
}
