<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>New Contact Form Submission</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
        }

        .container {
            max-width: 600px;
            margin: 20px auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }

        .header {
            font-size: 1.2em;
            font-weight: bold;
            margin-bottom: 10px;
        }

        .message-box {
            background-color: #f9f9f9;
            border: 1px solid #eee;
            padding: 15px;
            margin-top: 15px;
            white-space: pre-wrap;
            word-wrap: break-word;
        }
    </style>
</head>

<body>
    <div class="container">
        <div class="header">New message from masri-programmer contact form.</div>
        <p>
            <strong>Name:</strong> {{ $formData['name'] }}
        </p>
        <p>
            <strong>Email:</strong> <a href="mailto:{{ $formData['email'] }}">{{ $formData['email'] }}</a>
        </p>
        <p><strong>Message:</strong></p>
        <div class="message-box">
            {{ $formData['message'] }}
        </div>
    </div>
</body>

</html>