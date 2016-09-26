<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here.
 * You can see a list of the default settings in craft/app/etc/config/defaults/general.php
 */

return array(

    '*' => array(
        'omitScriptNameInUrls' => true,
    ),

    // Local
    'LOCAL' => array(
        'devMode' => true,
        'cacheDuration' => 'PT1S',

        'siteUrl' => array(
            'en_us' => 'http://websiteurlhere.com/',
        ),

        'environmentVariables' => array(
            'basePath'  => '/Users/snetman/sites/path/to/site/here/',
            'baseUrl' => 'http://websiteurlhere.dev/',
        )

    ),

    // Staging
    'STAGING' => array(
        'cooldownDuration' => 0,

        'siteUrl' => array(
            'en_us' => 'http://websiteurlhere.com/',
        ),

        'environmentVariables' => array(
            'basePath'  => '/path/to/websiteurlhere.com/',
            'baseUrl' => 'http://websiteurlhere.com/',
        )
    ),

    // Production
    'PRODUCTION' => array(
        'cooldownDuration' => 0,

        'siteUrl' => array(
            'en_us' => 'http://websiteurlhere.com/',
        ),

        'environmentVariables' => array(
            'basePath'  => '/path/to/websiteurlhere.com/',
            'baseUrl' => 'http://websiteurlhere.com/',
        )
    )

);
