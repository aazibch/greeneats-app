'use client';

import Container from '@/components/layout/container';

export default function ErrorPage() {
  return (
    <Container>
      <section class="bg-gray-900">
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-green-500">
              500
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">
              Something's wrong.
            </p>
            <p class="mb-4 text-lg font-light text-gray-400">
              An error occured. Our team has been alterted about the issue and
              is actively working to fix it.
            </p>
          </div>
        </div>
      </section>
    </Container>
  );
}
