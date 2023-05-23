<script lang="ts">
  import ExtImg from '$lib/ExtImg.svelte'
  import Title from '$lib/Title.svelte'
</script>

<Title>コース</Title>
<div flex="~ col" gap3>
  <text-3xl text-center>電気系</text-3xl>
  <div flex="~ col" gap7>
    <flex gap5>
      <ExtImg
        src="https://www.pen-kanagawa.ed.jp/kawasakikoka-th/images/bunkasai.jpg"
        alt="Image of cultural festival"
        object-cover
        w1
        rd-xl
        basis="5/12"
      />
      <div shadow="lg hover:md" rd-xl bg-red200 p5 basis="7/12">
        <h1 fwbold text-xl mb3>情報メディアコース</h1>
        <p>説明</p>
      </div>
    </flex>
    <flex gap5>
      <div shadow="lg hover:md" rd-xl bg-red200 p5 basis="7/12">
        <h1 fwbold text-xl mb3>電気テクノロジーコース</h1>
        <p>説明</p>
      </div>
      <ExtImg
        src="https://www.pen-kanagawa.ed.jp/kawasakikoka-th/images/bunkasai.jpg"
        alt="Image of cultural festival"
        object-cover
        w1
        rd-xl
        basis="5/12"
      />
    </flex>
  </div>
</div>
