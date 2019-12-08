<template>
  <section class="section">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title is-spaced">News</h1>
        <h2 class="subtitle">Create an account to better enjoy our services</h2>
      </div>
    </div>
    <div class="container has-text-centered">
      <div class="columns is-centered">
        <div class="column is-5 is-4-desktop">
          <form>
            <div class="field">
              <div class="control">
                <input class="input" type="email" placeholder="Email" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input" type="text" placeholder="Name" />
              </div>
            </div>
            <div class="field">
              <div class="control">
                <input class="input" type="password" placeholder="Password" />
              </div>
            </div>
            <div class="field is-grouped">
              <div class="control is-expanded">
                <b-navbar-item
                  tag="router-link"
                  :to="{ path: '/login' }"
                  class="button is-light"
                >Log in</b-navbar-item>
              </div>
              <div class="control is-expanded">
                <button class="button is-primary is-fullwidth">Sign up!</button>
              </div>
            </div>
            <p>
              By signing in you agree with the
              <a href>Terms and Conditions</a> and
              <a href>Privacy Policy</a>.
            </p>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>
