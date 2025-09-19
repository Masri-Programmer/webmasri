<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactFormMail;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Validator;

class ContactController extends Controller
{
    /**
     * Handle the incoming contact form submission.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function __invoke(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'message' => 'required|string|max:5000',
        ]);

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $validatedData = $validator->validated();
        $recipient = env('MAIL_FROM_ADDRESS');

        try {
            Mail::to($recipient)->send(new ContactFormMail($validatedData));
            return response()->json(['message' => 'Email sent successfully.'], 202);
        } catch (\Exception $e) {
            Log::error('Mail sending failed: ' . $e->getMessage());

            return response()->json(['message' => 'Failed to send email. Please try again later.'], 500);
        }
    }
}
