<script lang="ts">
  import Container from '$lib/Container.svelte'
  import ExtLink from '$lib/ExtLink.svelte'
</script>

<footer bg-red100 mt3 p5>
  <Container>
    <flex gap4 items-center>
      <img h14 src="$lib/assets/logo.png" alt="ロゴ" />
      <div>
        <p text-md>神奈川県立</p>
        <p text-xl>川崎工科高等学校</p>
        <p text-md>Kawasaki Senior High School of Science and Technology</p>
      </div>
    </flex>
    <flex items-center gap15 mt2>
      <div>
        <p>〒211-0013 川崎市中原区上平間1700-7</p>
        <p>
          TEL: <a class="link" href="tel:+810445110114">(044) 511-0114</a>
        </p>
      </div>
      <div flex scale-220 gap1>
        <ExtLink href="https://www.youtube.com/@user-kawasakikoka">
          <div i-mdi="youtube" text="!red500 !hover:red" />
        </ExtLink>
        <ExtLink href="https://www.pen-kanagawa.ed.jp/kawasakikoka-th/">
          <div i-mdi="earth" text="!red500 !hover:red" />
        </ExtLink>
      </div>
    </flex>
  </Container>
</footer>
