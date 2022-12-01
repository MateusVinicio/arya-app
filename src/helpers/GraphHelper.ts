type SimsByProvierProps = {
  qtd: number;
  id_provider: number;
  name: string;
};

export type GraphDataProps = {
  x: string;
  y: number;
};

export const simsByProviderToData = (
  simsByProvider: Array<SimsByProvierProps>
): Array<GraphDataProps> => {
  return simsByProvider.map((s) => {
    return {
      x: s.name,
      y: s.qtd,
    };
  });
};
