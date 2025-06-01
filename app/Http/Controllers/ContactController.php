<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => [
                'required',
                'string',
                'max:255',
                'regex:/^[a-zA-ZçÇğĞıİöÖşŞüÜ\s]{3,}$/'
            ],
            'phone' => [
                'required',
                'regex:/^05\d{9}$/'
            ],
        ]);

        Mail::raw("Ad: {$validated['name']}\nTelefon: {$validated['phone']}", function ($message) {
            $message->to('nazli.gencx@gmail.com')
                ->subject('Yeni Beni Arayın Talebi');
        });

        return redirect()->back()->with('success', 'Teşekkürler, en kısa sürede size ulaşacağız.');
    }
}
